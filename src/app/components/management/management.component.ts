import { Component } from '@angular/core';
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  protected readonly StateManagerService = StateManagerService;

}
