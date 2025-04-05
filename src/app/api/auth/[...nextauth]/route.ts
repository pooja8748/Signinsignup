/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/lib/users";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await loginUser(credentials.email, credentials.password);
        if (user) {
          return {
            id: (user as any).id || (user as any)._id || String((user as any).userId) || String(Math.random()),
            email: user.email,
            name: user.name,
            // Add any other properties from your user object that you need
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
