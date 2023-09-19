import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '8584b65cf9a01607a1f0',
      clientSecret: 'c4118bd2f2c552e58b56835dc476961c6fc89528',
    }),
  ],
  secret: 'tjslwlsl1357',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 