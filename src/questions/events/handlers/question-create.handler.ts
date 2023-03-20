import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { CreateQuestionEvent } from '../impl/question-create.event';

@EventsHandler(CreateQuestionEvent)
export class CreateQuestionHandler
  implements IEventHandler<CreateQuestionEvent> {
  handle(event: CreateQuestionEvent) {
    console.log(clc.greenBright('CreateQuestionEvent...'));
  }
}
