import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  email: string = "";
  password: string = "";

  onSubmitLogin(): void{
    this.onSubmitLoginEvent.emit({
      "email": this.email,
      "password": this.password
    });
  }
}
