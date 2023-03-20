import { AggregateRoot } from '@nestjs/cqrs';
import { CreateQuestionEvent } from '../events/impl/question-create.event';
import { GetQuestionEvent } from '../events/impl/question-get.event';
export class Question extends AggregateRoot {
  constructor() {
    super();
  }

  addQuestion(questionName: string, description: string, questionText: string, createdAt: string) {
    // logic
    this.apply(new CreateQuestionEvent(questionName, description, questionText, createdAt));
  }

  getQuestion(questionId: number) {
    // logic
    this.apply(new GetQuestionEvent(questionId));
  }
}
