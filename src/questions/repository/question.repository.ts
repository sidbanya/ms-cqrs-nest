import { Injectable } from '@nestjs/common';
import { Question } from '../models/question.model';
import { useQuestion } from './fixtures/question/question';

@Injectable()
export class QuestionRepository {
  async findOneById(id: number): Promise<Question> {
    return useQuestion;
  }

  async findAll(): Promise<Question[]> {
    return [useQuestion];
  }
}
