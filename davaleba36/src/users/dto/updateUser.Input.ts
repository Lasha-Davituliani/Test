import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdateUserInput{
    @Field({nullable:true})
    fullName?:string
    @Field({nullable:true})
    email?:string
     @Field({nullable:true})
    age?:number
}