import { Component } from '@angular/core';
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  protected readonly StateManagerService = StateManagerService;
}
