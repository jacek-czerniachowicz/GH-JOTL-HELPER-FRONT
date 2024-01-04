import {Component, Input, OnInit} from '@angular/core';
import {HeroRepresentation} from "../../../../services/api/models/HeroRepresentation";
import {AxiosService} from "../../../../services/axios.service";
import {RoomRepresentation} from "../../../../services/api/models/RoomRepresentation";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  @Input() room: RoomRepresentation = <RoomRepresentation>{};

  hero: HeroRepresentation = <HeroRepresentation>{};
  isUserHaveHero: boolean = false;
  availableRaces: string[] = ["VOIDWARDEN", "REDGUARD", "HATCHET", "DEMOLITIONIST"];
  raceToNameMap = new Map<string, string>;
  nameToRaceMap = new Map<string, string>;
  heroName: string = "";
  heroRace: string = "";

  componentToShow: string = ""

  constructor(private http: AxiosService){
    this.setMap();
    if (!this.isUserHaveHero){
      this.checkAvailableRaces()
    }
  }

  ngOnInit(): void {
    this.loadUserHero();
    console.log(this.hero)
    console.log(this.room)
  }

  loadUserHero(){
    this.http.request(
      "GET",
      `api/v1/rooms/${this.room.id}/heroes/user-hero`,
      null
    ).then(response => {
      this.hero = response.data;
      this.isUserHaveHero = true;
    })
  }

  checkAvailableRaces() {
    let heroes = this.room.heroes?.map(value => value.race);
    this.availableRaces = this.availableRaces.filter((item) => !heroes?.includes(item))
  }

  setMap(){
    this.raceToNameMap.set("VOIDWARDEN", "Pustowicielka")
    this.raceToNameMap.set("REDGUARD", "Czerwony strażnik")
    this.raceToNameMap.set("HATCHET", "Topór")
    this.raceToNameMap.set("DEMOLITIONIST", "Wyburzyciel")

    this.nameToRaceMap.set("Pustowicielka", "VOIDWARDEN")
    this.nameToRaceMap.set("Czerwony strażnik", "REDGUARD")
    this.nameToRaceMap.set("Topór", "HATCHET")
    this.nameToRaceMap.set("Wyburzyciel", "DEMOLITIONIST")
  }

  raceExport(value: string){
    let race = this.raceToNameMap.get(value);
    if (race != undefined){
      return race;
    }
    return "";

}
  raceImport(value: string):string{
    let race = this.nameToRaceMap.get(value)
    if (race != undefined){
      return race;
    }
    return "";

  }

  calculatePerkPoints(value: number){
    if (value==0){
      return 0
    }
    return Math.floor(value/3)
  }

  cardsManagement() {
    this.componentToShow = "cards"
  }

  itemsManagement() {
    this.componentToShow = "items"
  }

  perksManagement() {
    this.componentToShow = "perks"
  }

  onSubmitForm() {
    if (this.heroName == "" || this.heroRace == ""){
      return;
    }
    this.http.request(
      "POST",
      `/api/v1/rooms/${this.room.id}/heroes`,
      {
        name: this.heroName,
        raceName: this.heroRace
      }
    ).then(response => {
      this.hero = response.data;
      this.isUserHaveHero = true;
    });
  }


}
