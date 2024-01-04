import {Component, Input, OnInit} from '@angular/core';
import {ItemRepresentation} from "../../../../services/api/models/ItemRepresentation";
import {AxiosService} from "../../../../services/axios.service";
import {RoomRepresentation} from "../../../../services/api/models/RoomRepresentation";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrl: './merchant.component.css'
})
export class MerchantComponent implements OnInit{
  @Input() room: RoomRepresentation = <RoomRepresentation>{}
  items: ItemRepresentation[] = []

  constructor(private http: AxiosService) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.http.request(
      "GET",
      `/api/v1/rooms/${this.room.id}/items`,
      null
    ).then(response => {
      this.items = response.data;
    })
  }


}
