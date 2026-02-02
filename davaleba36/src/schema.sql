# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type UsersPayload {
  _id: String!
  fullName: String!
  email: String!
  age: Float!
}

type PostPayload {
  _id: String!
  title: String!
  content: String!
}

type Query {
  getUsers: [UsersPayload!]
  getUserById(id: UserInputID!): UsersPayload
  getAllPosts: [PostPayload!]
  getPostById(id: PostIdInput!): PostPayload!
}

input UserInputID {
  id: String!
}

input PostIdInput {
  id: String!
}

type Mutation {
  createUser(createUser: CreateUserInput!): UsersPayload!
  updateUser(userId: UserInputID!, data: UpdateUserInput!): UsersPayload!
  deleteUser(id: UserInputID!): UsersPayload!
  createPost(data: CreatePostInput!): PostPayload!
  updatePost(postId: PostIdInput!, data: UpdatePostInput!): PostPayload!
  deletePost(id: PostIdInput!): PostPayload!
}

input CreateUserInput {
  fullName: String!
  email: String!
  age: Float!
}

input UpdateUserInput {
  fullName: String
  email: String
  age: Float
}

input CreatePostInput {
  title: String!
  content: String!
}

input UpdatePostInput {
  title: String
  content: String
}