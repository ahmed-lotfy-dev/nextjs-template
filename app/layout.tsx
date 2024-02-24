import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter, roboto_mono } from "@/components/fonts";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screenn bg-background font-sans antialiased",
          inter.variable,
          roboto_mono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
