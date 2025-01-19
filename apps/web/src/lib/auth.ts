import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt"
export const authOptions={
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  secret:process.env.NEXTAUTH_SECRET,
  callbacks:{
    async session({token,session}:{
      token:JWT,
      session:Session
    }){
      if(token.sub && session.user){
        session.user.id=token.sub;
        session.user.name=token.name as string;
        session.user.image=token.picture || token.avatar_url as string;
      }
      return session
    }
  }
} satisfies NextAuthOptions