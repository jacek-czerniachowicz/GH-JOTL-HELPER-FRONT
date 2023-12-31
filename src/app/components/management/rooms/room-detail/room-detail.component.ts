import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RoomRepresentation} from "../../../../services/api/models/RoomRepresentation";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css'
})
export class RoomDetailComponent {
  user: string = ""
  @Input()
  room: RoomRepresentation = {};
  @Output()
  removeItemEvent = new EventEmitter();
  @Output()
  chooseItemEvent = new EventEmitter();

}
