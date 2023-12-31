import {Component, OnInit} from '@angular/core';
import {AxiosService} from "../../../services/axios.service";
import {RoomRepresentation} from "../../../services/api/models/RoomRepresentation";


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  showCreateForm: boolean = false;
  showJoinForm: boolean = false;

  rooms: RoomRepresentation[] = [];
  newRoomName: string = "";

  constructor(private http: AxiosService){
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
}
