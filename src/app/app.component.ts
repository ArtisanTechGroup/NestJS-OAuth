import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './services/authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// print off access token
export class AppComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    console.log(this.oauthService);
  }
  title = 'NestJS-OAuth';
}
