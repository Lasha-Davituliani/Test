import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import{users,posts} from './data.js'

const resolvers = {
    Query:{
        users(){
            return users
        },
        user(_,{id}){
            return users.find((u) => u.id === Number(id))
        },
        posts(){
            return posts
        }
    },

    Post:{
        user(parent){
            const user = users.find(u=> u.id ===parent.userId)
            return  user
        }

    },
    User:{
        posts(parent){
            const postData = posts.filter(p=>p.userId===parent.id)
            return postData;
        }
    },

    Mutation:{
        deleteUser(_,{id}){
            const findUser = users.findIndex(u=>u.id===Number(id) )
            if(findUser == -1) return false;
            users.splice(findUser,1)
            return true
        },
        createUser(_,{createUserDto:{name,age,isSmoker}}){
            const lastId = users[users.length-1]?.id||0
            const newObj = {
                id:lastId+1,
                name,
                age,
                isSmoker
            }
            users.push(newObj)
            return "user created successfully"

        },



        updateUser(_, { id, updateUserDto }) {
         const findUser = users.findIndex(u => u.id === Number(id))
          if (findUser == -1) return false;
    
         users[findUser] = {
            ...users[findUser],
            ...updateUserDto
         }
         
    
    return "user updated successfully"
}

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server)

console.log(`server running on ${url}`);