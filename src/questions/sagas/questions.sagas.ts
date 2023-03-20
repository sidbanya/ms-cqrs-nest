import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateQuestionEvent } from '../events/impl/question-create.event';
import { GetQuestionEvent } from '../events/impl/question-get.event';


@Injectable()
export class QuestionsSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(CreateQuestionEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [QuestionsSagas] Saga'));
          return new GetQuestionEvent(1);//TODO:Sidharth
        }),
      );
  }
}
