import {Component, Input, OnInit} from '@angular/core';
import {HeroRepresentation} from "../../../../../services/api/models/HeroRepresentation";
import {CardRepresentation} from "../../../../../services/api/models/CardRepresentation";
import {RoomRepresentation} from "../../../../../services/api/models/RoomRepresentation";
import {AxiosService} from "../../../../../services/axios.service";

@Component({
  selector: 'app-ability-cards',
  templateUrl: './ability-cards.component.html',
  styleUrl: './ability-cards.component.css'
})
export class AbilityCardsComponent implements OnInit{
   @Input() hero: HeroRepresentation = <HeroRepresentation>{};
   @Input() room: RoomRepresentation = <RoomRepresentation>{};
   availableCards: CardRepresentation[] = []
   selectedCards: CardRepresentation[] = []

  constructor(private http: AxiosService) {
  }

  ngOnInit(): void {
    this.refresh();
  }
  fetchAvailableCards(){
     this.http.request(
       "GET",
       `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/cards`,
       null
     ).then(response => {
       this.availableCards = response.data;
     })
  }


  selectCard(id: number) {
    this.http.request(
      "PUT",
      `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/cards/${id}`,
      null
    ).then(response => {
      this.refresh()
    })
  }

  fetchSelectedCards(){
     this.http.request(
       "GET",
       `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/cards/chosen`,
       null
     ).then(response => {
       this.selectedCards = response.data;
     })
  }

  unselectCard(id: number) {
    this.http.request(
      "PUT",
      `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/cards/${id}/undo`,
      null
    ).then(response => {
      this.refresh()
    })
  }

  refresh(){
    this.fetchAvailableCards();
    this.fetchSelectedCards();
  }
}
