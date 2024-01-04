import {Component, Input} from '@angular/core';
import {RoomRepresentation} from "../../../../services/api/models/RoomRepresentation";
import {AxiosService} from "../../../../services/axios.service";
import {HeroRepresentation} from "../../../../services/api/models/HeroRepresentation";
import {MatDialog} from "@angular/material/dialog";
import {HeroInfoDialogComponent} from "./hero-info-dialog/hero-info-dialog.component";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  @Input() room: RoomRepresentation = <RoomRepresentation>{};
  showHero: boolean = false;
  heroToShow: HeroRepresentation = <HeroRepresentation>{};

  constructor(private http: AxiosService,
              public dialog: MatDialog) {
  }

  showHeroDetails(heroId: number) {
    this.http.request(
      "GET",
      `api/v1/rooms/${this.room.id}/heroes/${heroId}`,
      null
    ).then(response => {
      this.heroToShow = response.data;
      this.showHero = true;
      this.openDialog();
    });
  }

  openDialog(){
    this.dialog.open(HeroInfoDialogComponent, {data: this.heroToShow})
  }
}
