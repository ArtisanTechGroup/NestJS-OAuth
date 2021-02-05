import { IGitHubUser } from '../Model/IGitHubUserData';

export class GitHubUserMessage {

  clientId: string;
  redirectUri: string;
  login: string;
  scope: string;

  constructor(gitHubUser: IGitHubUser) {
    this.clientId = gitHubUser.clientId;
    this.redirectUri = gitHubUser.redirectUri;
    this.login = gitHubUser.login;
    this.scope = gitHubUser.scope;
  }
}