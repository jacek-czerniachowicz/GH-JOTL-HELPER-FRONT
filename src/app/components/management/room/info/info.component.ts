import {Component, Input} from '@angular/core';
import {RoomRepresentation} from "../../../../services/api/models/RoomRepresentation";
import {AxiosService} from "../../../../services/axios.service";
import {HeroRepresentation} from "../../../../services/api/models/HeroRepresentation";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  @Input() room: RoomRepresentation = {};
  showHero: boolean = false;
  heroToShow: HeroRepresentation = <HeroRepresentation>{};

  constructor(private http: AxiosService) {
  }

  showHeroDetails(heroId: number) {
    this.http.request(
      "GET",
      `api/v1/rooms/${this.room.id}/heroes/${heroId}`,
      null
    ).then(response => {
      this.heroToShow = response.data;
      this.showHero = true;
    });
  }
}
