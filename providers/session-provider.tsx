"use client";

import { SessionProvider as NextAuthSession } from "next-auth/react";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSession>{children}</NextAuthSession>;
};
