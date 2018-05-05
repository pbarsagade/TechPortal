import { Category } from './category';
import { User } from './user';

export class Question {
    Id: number;
    Title: string;
    Description: string;
    DateCreated: Date;
    Category: Category;
    User: User;

    /**
     *
     */
    constructor() {
        this.Category = new Category();
        this.User = new User();
        this.DateCreated = new Date();
    }
}
