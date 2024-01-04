import {Component, Inject, Input} from '@angular/core';
import {HeroRepresentation} from "../../../../../services/api/models/HeroRepresentation";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-hero-info-details',
  templateUrl: './hero-info-dialog.component.html',
  styleUrl: './hero-info-dialog.component.css'
})
export class HeroInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public hero: HeroRepresentation) {
  }
}
