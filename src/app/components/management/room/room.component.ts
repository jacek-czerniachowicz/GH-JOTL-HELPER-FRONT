import {Component, Input} from '@angular/core';
import {RoomRepresentation} from "../../../services/api/models/RoomRepresentation";
import {InviteCodeService} from "../../../services/invite-code.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  constructor(private invService: InviteCodeService) {
  }


  @Input() room: RoomRepresentation = {};

  inviteCode: string = "";


  showInviteCode() {
    if (this.room.id != null){
      this.inviteCode = this.invService.generateUniqueString(this.room.id)
    }
    console.log("TEST: " + this.invService.getIdByCode(this.inviteCode))
  }
}
