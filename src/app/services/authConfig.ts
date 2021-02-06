import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: 'https://github.com/login/oauth/authorize',
  redirectUri: `${environment.redirectUri}`,
  clientId: environment.clientId,
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
};
