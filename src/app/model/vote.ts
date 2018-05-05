import { User } from './user';

export class Vote {
    Id: number;
    VotedBy: User;
    AnswerID: number;
    DateCreated: Date;
}
