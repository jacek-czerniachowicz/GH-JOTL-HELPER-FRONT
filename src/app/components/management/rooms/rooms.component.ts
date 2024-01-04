import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AxiosService} from "../../../services/axios.service";
import {RoomRepresentation} from "../../../services/api/models/RoomRepresentation";
import {StateManagerService} from "../../../services/state-manager.service";
import {InviteCodeService} from "../../../services/invite-code.service";


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  showCreateForm: boolean = false;
  showJoinForm: boolean = false;

  rooms: RoomRepresentation[] = [];
  @Output() room: RoomRepresentation = <RoomRepresentation>{};
  @Output() roomEvent = new EventEmitter<RoomRepresentation>()
  newRoomName: string = "";
  inviteCode: string = "";

  constructor(
    private http: AxiosService, private invService: InviteCodeService){
  }

  ngOnInit(): void {
    this.loadUserRooms();
  }

  loadUserRooms(){
    this.http.request(
      "GET",
      "/api/v1/rooms/user-rooms",
      null
    ).then(response => {
      this.rooms = response.data
    })
  }

  createRoom(){
    this.http.request(
      "POST",
      "/api/v1/rooms",
      this.newRoomName
    ).then(response => {
      this.showCreateForm = false;
      this.loadUserRooms();
    }).catch(err => console.log(err))
  }

  deleteRoom(id: number){
    console.log(id)
    this.http.request(
      "DELETE",
      `/api/v1/rooms/${id}`,
      null
    ).then( response => {
      this.rooms = this.rooms
        .filter((room: RoomRepresentation) => room.id != id)
    })
  }

  openRoom(id:number) {
    this.http.request(
      "GET",
      `/api/v1/rooms/${id}`,
      null
    ).then(response => {
      StateManagerService.showComponent("room")
      this.room = response.data
      this.roomEvent.emit(response.data)
    })
  }

  joinRoom() {
    let id = this.invService.getIdByCode(this.inviteCode);
    if (id == -1){
      return;
    }
    this.http.request(
      "PUT",
      `/api/v1/rooms/join/${id}`,
      null
    ).then(response => {
      this.openRoom(id);
    })

  }
}
