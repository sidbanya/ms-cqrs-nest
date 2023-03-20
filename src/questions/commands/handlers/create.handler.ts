import {CommandHandler, EventPublisher, ICommandHandler} from '@nestjs/cqrs';
import * as clc from 'cli-color';
import {CreateCommand} from '../impl/create.command';
import {QuestionRepository} from '../../repository/question.repository';

@CommandHandler(CreateCommand)
export class CreateCommandHandler implements ICommandHandler<CreateCommand>{
    constructor (
        private readonly repository:QuestionRepository,
        private readonly publisher: EventPublisher
        ){}

        async execute(command: CreateCommand){
            console.log(clc.greenBright('Create'));

            const {
                questionName, description, questionText, createdAt
            } =command;

            const contest = this.publisher.mergeObjectContext(
                await  this.repository.findOneById(1)//TODO:Sidharth
            );
            contest.addQuestion(questionName, description, questionText, createdAt);
            contest.commit();
        }
}