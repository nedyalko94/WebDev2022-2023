import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@/mongodb/client"


export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    //   github>settings > developer settings > OAuth Apps ? client id and generate  secrets 
    /*
      NextApp
      http://localhost:3000 
    
    */
    }) 
  ],
  // and the actual api route is   http://localhost:3000/api/auth/signin.


  database: process.env.DB_URL,
  session: {
    strategy: "jwt"
},
  jwt: {
    secret: 'asdcvbtjhm'
  },
  adapter: MongoDBAdapter(clientPromise),
 
  callbacks: {
    async jwt({token, user}) { 
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({session, token}) {
      session.user.id = token.id
      return session
    }
  }
})   