export const typeDefs = `#graphql
type User{
id:ID,
name:String,
age:Int,
isSmoker:Boolean,
posts:[Post]
}

type Post{
    id:ID,
    title:String,
    content:String,
    user:User
}

type Query{
    users:[User!]
    user(id:ID!):User
    posts:[Post!]

}
input createUserDto{
    name:String,
    age:Int,
    isSmoker:Boolean
}
input updateUserDto{
    name:String,
    age:Int,
    isSmoker:Boolean
}
type Mutation{
    deleteUser(id:ID!):Boolean
    createUser(createUserDto:createUserDto):String
    updateUser(updateUserDto:updateUserDto,id:ID!):String
}

`