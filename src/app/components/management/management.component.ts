import {Component, Input, Output} from '@angular/core';
import {StateManagerService} from "../../services/state-manager.service";
import {RoomRepresentation} from "../../services/api/models/RoomRepresentation";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  protected readonly StateManagerService = StateManagerService;

  room: RoomRepresentation = {}

  setRoom(room: RoomRepresentation) {
    this.room = room;
  }
  getRoom(){
    return this.room;
  }
}
