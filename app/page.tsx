import { auth } from "@/auth";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ThemeToggle />

      <p>Welcome To Nextjs Template</p>
      <p>Welcome : {session?.user?.name}</p>
    </main>
  );
}
