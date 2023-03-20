import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCommand } from './commands/impl/create.command';
import { QuestionDto } from './interfaces/QuestionDto';
import { Question } from './models/question.model';
import { GetQuestionsQuery } from './queries/impl';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createQuestion( @Body() dto: QuestionDto) {
    return this.commandBus.execute(new CreateCommand(dto.questionName, dto.description, dto.questionText, dto.createdAt));
  }

  @Get()
  async getAll(): Promise<Question[]> {
    return this.queryBus.execute(new GetQuestionsQuery());
  }
}
