import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import PrivateNavbar from "@/components/create/private-navbar";
import PrivateFooter from "@/components/create/private-footer";
import CreateClient from "./client";

export default async function CreatePage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <PrivateNavbar />
      <CreateClient />
      <PrivateFooter />
    </>
  );
}
