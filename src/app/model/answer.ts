import { User } from './user';
import { Vote } from './vote';

export class Answer {
    Id: number;
    Title: string;
    Description: string;
    User: User;
    Votes: Vote[];
    DateCreated: Date;
}
