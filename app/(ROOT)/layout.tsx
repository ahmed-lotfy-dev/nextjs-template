import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter, roboto_mono } from "@/components/fonts";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "NextJS Template With Tailwind And Shadcn",
  description: "Template Repo To Use To Initialize Any Project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log(session);
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          roboto_mono.variable
        )}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
