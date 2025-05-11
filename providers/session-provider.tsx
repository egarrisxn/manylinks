"use client";

import { SessionProvider as NextAuthSession } from "next-auth/react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <NextAuthSession>{children}</NextAuthSession>;
};
