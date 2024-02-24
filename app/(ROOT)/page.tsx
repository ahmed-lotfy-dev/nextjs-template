import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Welcome To Nextjs Template</p>
      <p>Welcome : {session?.user?.name}</p>
    </main>
  );
}
