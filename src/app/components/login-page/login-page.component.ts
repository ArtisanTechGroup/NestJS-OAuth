import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: UserDataService) {}

  ngOnInit(): void {}

  goToGitHubApi() {
    console.log("clicked")
    this.userService.getData();
  }
}