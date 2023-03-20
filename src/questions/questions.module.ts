import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QuestionsController } from './questions.controller';
import { QueryHandlers } from './queries/handlers';
import { QuestionsSagas } from './sagas/questions.sagas';
import { QuestionRepository } from './repository/question.repository';

@Module({
  imports: [CqrsModule],
  controllers: [QuestionsController],
  providers: [
    QuestionRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    QuestionsSagas,
  ],
})
export class QuestionsModule {}
