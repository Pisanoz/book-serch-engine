const { gpl } = require("apollo-server-express");

const typeDefs = gpl`
type User{
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book{
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String
}
type Auth{
    token: ID!
    user: User!
}
input SavingBook{
    bookId: String
    authors:[String]
    description: String
    image: String
    link: String
    title: String
}

type Query{
me:User
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: SavingBook!):User
    removeBook(bookId: ID!):User
}

`;