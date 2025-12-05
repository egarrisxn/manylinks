import "next-auth";
import type { DefaultSession, Session, User } from "next-auth";

type UserId = string;

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: UserId;
    };
  }
}
