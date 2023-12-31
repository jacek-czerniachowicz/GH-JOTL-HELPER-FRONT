import {Component} from '@angular/core';
import {StateManagerService} from "./services/state-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GH-JOTL-HELPER-FRONT';

  protected readonly StateManagerService = StateManagerService;
}
