import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() onSubmitRegisterEvent = new EventEmitter();

  username: string = "";
  email: string = "";
  password: string = "";

  role: string = "USER";

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "username": this.username,
      "login": this.email,
      "password": this.password,
      "role": this.role
    });
  }
}
