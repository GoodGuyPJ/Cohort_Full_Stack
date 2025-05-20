// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const server = new ApolloServer({
//   typeDefs: `#graphql
//     type Query {
//       hello: String
//     }

//   `,
//   resolvers: {
//     Query: {
//       hello: () => "Hello world!",
//     },
//   },
// })

// const { url } = await startStandaloneServer(server, { listen: { port: 7000}});
// console.log(`🚀  Server ready at: ${url}`);

//********************* */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      greetings(name: String): String!
      add(a: Int!, b: Int!): Int
    }
   
  `,
  resolvers: {
    Query: {
      greetings(parent, args, ctx, info) {
        const { name } = args;
        return `Hello ${name || "World"}!`;
      },

      add: (_, { a, b }) => a + b,
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 7000 } });
console.log(`🚀  Server ready at: ${url}`);
