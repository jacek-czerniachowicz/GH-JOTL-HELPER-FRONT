import {Component, Input, OnInit} from '@angular/core';
import {RoomRepresentation} from "../../../../../services/api/models/RoomRepresentation";
import {AxiosService} from "../../../../../services/axios.service";
import {ItemRepresentation} from "../../../../../services/api/models/ItemRepresentation";

@Component({
  selector: 'app-items-management',
  templateUrl: './items-management.component.html',
  styleUrl: './items-management.component.css'
})
export class ItemsManagementComponent implements OnInit{
  @Input() room: RoomRepresentation = <RoomRepresentation>{};

  heroItems: ItemRepresentation[] = [<ItemRepresentation>{}]

  constructor(private http: AxiosService) {
  }
  ngOnInit(): void {
    this.refresh();
  }

  fetchHeroItems(){
    this.http.request(
      "GET",
      `/api/v1/rooms/${this.room.id}/items/hero-items`,
      null
    ).then(response => {
      this.heroItems = response.data;
    })
  }

  refresh() {
    this.fetchHeroItems();
  }

  selectItem(id: number) {
    this.http.request(
      "PUT",
      `/api/v1/rooms/${this.room.id}/items/${id}`,
      null
    ).then(response =>{

    })
  }
}
