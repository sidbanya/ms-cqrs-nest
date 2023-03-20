import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetQuestionEvent } from '../impl/question-get.event';

@EventsHandler(GetQuestionEvent)
export class GetQuestionHandler implements IEventHandler<GetQuestionEvent> {
  handle(event: GetQuestionEvent) {
    console.log(clc.yellowBright('Async GetQuestionEvent...'));
  }
}
