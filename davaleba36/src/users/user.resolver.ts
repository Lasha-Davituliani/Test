import {Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UsersPayload } from "./dto/user.payload";
import { CreateUserInput } from "./dto/user.Input";
import { UserInputID } from "./dto/user-id.input";
import { dateTimestampProvider } from "rxjs/internal/scheduler/dateTimestampProvider";
import { UpdateUserInput } from "./dto/updateUser.Input";


@Resolver()
export class UsersResolver{
    constructor(private usersService:UsersService){}

    @Query(()=>[UsersPayload], {nullable:true})
    getUsers(){
        return this.usersService.findAll();
    }

    @Query(()=> UsersPayload,{nullable:true})
    getUserById(@Args("id"){id}:UserInputID){
        return this.usersService.findOne(id)
    }

    @Mutation(()=>UsersPayload)
    createUser(@Args("createUser") createUser:CreateUserInput){
        
        return this.usersService.create(createUser)
    }
    @Mutation(()=>UsersPayload)
    updateUser(@Args("userId"){id}:UserInputID,
                @Args("data") data:UpdateUserInput){
                    return this.usersService.update(id,data)
                }

    @Mutation(()=> UsersPayload)
         deleteUser(@Args("id"){id}:UserInputID){        
            return this.usersService.remove(id)
         }            
}