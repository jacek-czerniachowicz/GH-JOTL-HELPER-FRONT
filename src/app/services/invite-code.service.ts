import {Injectable} from "@angular/core";
import {AxiosService} from "./axios.service";
import {InviteCodeRepresentation} from "./api/models/InviteCodeRepresentation";

@Injectable({
  providedIn: 'root'
})
export class InviteCodeService {
  invCodeRep: Array<InviteCodeRepresentation> = [];

  private idToCodeMap: Map<number, string>;
  private codeToIdMap: Map<string, number>;

  roomId: number
  code: string



  private constructor(private http: AxiosService) {
    this.idToCodeMap = new Map<number, string>();
    this.codeToIdMap = new Map<string, number>();
    this.roomId = -1;
    this.code = ""
    this.fetchAllCodes();
  }


  generateUniqueString(id:number): string{
    let code = this.idToCodeMap.get(id)
    if (code != undefined){
      return code
    }
    do {
      code = this.generateRandomString();
      console.log("loop")
    }while (this.codeToIdMap.has(code));

    this.idToCodeMap.set(id, code);
    this.codeToIdMap.set(code, id);
    this.saveInviteCode(id, code)
    console.log(`id: ${id}, code: ${code}`)
    return code;
  }

  private generateRandomString() {
    const characters  ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    const characterLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength))
    }
    return result;
  }

  getIdByCode(code: string): number{
    this.loadId(code);
    return this.roomId;
  }
  getCodeById(id: number): string{
    this.loadCode(id);
    return this.code;
  }

  loadCode(id: number) {
    this.http.request(
      "GET",
      `/api/v1/rooms/invite/getCode/${id}`,
      null
    ).then(response => {
      this.code = response.data
    }).catch(err => {
      this.code = ""
    })
  }

  loadId(code: string){
    this.http.request(
      "GET",
      `/api/v1/rooms/invite/getId/${code}`,
      null
    ).then(response => { if(response.code != "403 Forbidden"){
      this.roomId = response.data
    }
    }).catch(err => {
      this.roomId = -1
    })
  }

  saveInviteCode(id: number, code: string){
    console.log("saving invite code...")
    this.http.request(
      "POST",
      "/api/v1/rooms/invite",
      {
        roomId: id,
        code: code
      }
    ).then();
  }

  fetchAllCodes(){
    this.http.request(
      "GET",
      "/api/v1/rooms/invite",
      null
    ).then(response => {
      this.invCodeRep = <InviteCodeRepresentation[]>response.data
      this.invCodeRep.map(element =>{
        if (element.code != null && element.roomId != null) {
          this.codeToIdMap.set(element.code, element.roomId)
          this.idToCodeMap.set(element.roomId, element.code)
        }
        })
    })
  }
}

