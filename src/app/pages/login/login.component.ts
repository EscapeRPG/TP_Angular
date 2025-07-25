import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {User} from '../../models/user';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    TranslatePipe,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public user: User = new User("isaac@gmail.com", "password");

  constructor(private userService: UserService) {}

  postLogin() {
    this.userService.login(this.user).subscribe({
      next: json => {
        if (json.code === "200") {
          console.log(json.data);
          alert(json.message);
        } else {
          alert(json.message);
        }
      }
    })
  }

}
