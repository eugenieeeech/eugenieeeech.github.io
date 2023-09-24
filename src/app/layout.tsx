import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Eugenie Cheng",
    default: "Eugenie Cheng's Page",
  },
  description: "Welcome to my page",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full  w-full antialiased" suppressHydrationWarning>
      <body className=" h-full w-full dark:bg-zinc-800">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
