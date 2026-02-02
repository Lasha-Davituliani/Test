import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInputID{
    @Field()
    id:string
}