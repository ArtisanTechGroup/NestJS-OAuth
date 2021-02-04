import { IUser } from 'server/Model/IUser';

export class UserMessage {
  name: string;
  email: string;
  blogUrl: string;
  twitterHandle?: string;
  company: string;
  location: string;
  hireable: boolean;
  bio: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.blogUrl = user.blogUrl;
    this.twitterHandle = user.twitterHandle;
    this.company = user.company;
    this.location = user.location;
    this.hireable = user.hireable;
    this.bio = user.bio;
  }
}
