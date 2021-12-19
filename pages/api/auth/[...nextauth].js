import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";

import Adapters from "next-auth/adapters";

import Models from "../../../models";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: Adapters.TypeORM.Adapter(process.env.DATABASE_URL, {
    models: {
      User: Models.User,
    },
  }),
  callbacks: {
    async session(session, token) {
      session.user.banned = token.banned;
      session.user.roles = token.roles;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
