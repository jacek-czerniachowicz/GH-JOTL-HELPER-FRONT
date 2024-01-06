import {Component, Input, OnInit} from '@angular/core';
import {HeroRepresentation} from "../../../../../services/api/models/HeroRepresentation";
import {RoomRepresentation} from "../../../../../services/api/models/RoomRepresentation";
import {AxiosService} from "../../../../../services/axios.service";
import {PerkRepresentation} from "../../../../../services/api/models/PerkRepresentation";

@Component({
  selector: 'app-perks-management',
  templateUrl: './perks-management.component.html',
  styleUrl: './perks-management.component.css'
})
export class PerksManagementComponent implements OnInit{
  @Input() hero: HeroRepresentation = <HeroRepresentation>{};
  @Input() room: RoomRepresentation = <RoomRepresentation>{};

  perks: PerkRepresentation[] = [<PerkRepresentation>{}];
  selectedPerks: PerkRepresentation[] = [<PerkRepresentation>{}];

  constructor(private http: AxiosService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  fetchPerks(){
    this.http.request(
      "GET",
      `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/perks`,
      null
    ).then(response =>{
      this.perks = response.data;
    })
  }


  selectPerk(id: number) {
    this.http.request(
      "PUT",
      `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/perks/${id}`,
      null
    ).then(response => {
      this.refresh();
    })
  }

  fetchSelectedPerks(){
    this.http.request(
      "GET",
      `/api/v1/rooms/${this.room.id}/heroes/${this.hero.id}/perks/chosen`,
      null
    ).then(response =>{
      this.selectedPerks = response.data;
    })
  }

  refresh(){
    this.fetchSelectedPerks();
    this.fetchPerks();
  }
}
