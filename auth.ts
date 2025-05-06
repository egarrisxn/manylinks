// By default, the `id` property does not exist on `session`.
// See https://authjs.dev/getting-started/typescript on how to add it.

import NextAuth, { type DefaultSession, type User } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import client from "@/lib/db";

// Extend the built-in User interface to include the id
interface ExtendedUser extends User {
  id: string;
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [GitHub, Google],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
