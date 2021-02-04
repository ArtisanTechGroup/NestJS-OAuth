export interface IUser {
  id?: string;
  name: string;
  email: string;
  blogUrl: string;
  twitterHandle?: string;
  company: string;
  location: string;
  hireable: boolean;
  bio: string;
}
