import {Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PostsService } from "./posts.service";
import { PostPayload } from "./dto/posts.payload";
import { CreatePostInput } from "./dto/creat.input";
import { PostIdInput } from "./dto/postId.input";
import { UpdatePostInput } from "./dto/update.input";

@Resolver()

export class PostResolver{
    constructor(private postService:PostsService){}
        @Query(()=>[PostPayload],{nullable:true})
        getAllPosts(){
            return this.postService.findAll()       
    }

    @Query(()=> PostPayload)
    getPostById(@Args("id"){id}:PostIdInput){
        return this.postService.findOne(id)
    }

    @Mutation(()=> PostPayload)
    createPost(@Args("data") data: CreatePostInput){
        return this.postService.create(data)
    }

    @Mutation(()=> PostPayload)
    updatePost(@Args("postId") {id}: PostIdInput,
               @Args("data") data: UpdatePostInput)
               {
        return this.postService.update(id,data);
    }

     @Mutation(()=> PostPayload)
     deletePost(@Args("id"){id}:PostIdInput){        
        return this.postService.remove(id)
     }
}