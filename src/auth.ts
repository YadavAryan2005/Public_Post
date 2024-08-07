import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import User from "../model/User";
import {connect,disconnect} from "./utils/connect";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connect();
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          return true;
        }
        const newUser = new User(user);
        await newUser.save();
        console.log("user", user);
        console.log("account", account);
      } catch (error) {
        console.log("error", error);
      }
        await disconnect();
      return true;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
});
