import {Component} from '@angular/core';
import {AxiosService} from "../../services/axios.service";
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private http: AxiosService) {
  }

  onLogin(input: any) {
    this.http.request(
      "POST",
      "/api/v1/auth/authenticate",
      {
        email: input.email,
        password: input.password
      }
    ).then(response => {
      this.http.setAuthToken(response.data.access_token)
      StateManagerService.setIsAuthorized(true);
      StateManagerService.showComponent("rooms")
    })
      .catch(err => console.log(err))
  }

  onRegister(input: any) {
    this.http.request(
      "POST",
          "api/v1/auth/register",
          {
            nickname: input.username,
            email: input.login,
            password: input.password,
            role: input.role
          }
    ).then(response => {
      this.http.setAuthToken(response.data.access_token)
      StateManagerService.setIsAuthorized(true);
      StateManagerService.showComponent("rooms")
    })
      .catch(err => console.log(err))
  }
}
