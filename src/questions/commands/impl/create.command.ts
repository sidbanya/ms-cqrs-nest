export class CreateCommand{
    constructor(
       public readonly questionName: string,
       public readonly description: string,
       public readonly questionText: string,
       public readonly createdAt: string,
    ){}
}