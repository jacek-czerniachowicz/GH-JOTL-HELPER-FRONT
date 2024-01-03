import {Component, EventEmitter, Output} from '@angular/core';
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();

  protected readonly StateManagerService = StateManagerService;
}
