export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// for serverless uncomment this
// import authConfig from "./auth.config";
// import NextAuth from "next-auth";
// export const { auth: middleware } = NextAuth(authConfig);
