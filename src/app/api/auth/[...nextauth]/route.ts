import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "331026583255-gtno2d18s5ei5rl8obmukebmnqubqopv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { handler as GET, handler as POST };
