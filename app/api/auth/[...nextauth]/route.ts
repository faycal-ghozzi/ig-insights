import NextAuth from "next-auth"
import InstagramProvider from "next-auth/providers/instagram"

const handler = NextAuth({
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
})

export { handler as GET, handler as POST }
