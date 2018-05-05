import { Category } from './category';
import { User } from './user';
import { Question } from './question';
import { Answer } from './answer';

export class QuestionAnswer {
    Id: number;
    DateCreated: Date;
    Question: Question;
    Answers: Answer[];
    constructor() {
        this.Question = new Question();
        this.Answers = [];
    }
}
