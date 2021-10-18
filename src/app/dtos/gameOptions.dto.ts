export class GameOptionsDto {
    numberOfQuestions: number;
    difficulty: string;
    categoryId: number;

    constructor(numberOfQuestions: number, difficulty: string, categoryId: number) {
        this.numberOfQuestions = numberOfQuestions;
        this.difficulty = difficulty;
        this.categoryId = categoryId;
    }
}
