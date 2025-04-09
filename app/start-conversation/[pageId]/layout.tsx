import Head from "next/head";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// You can still export a metadata object for supported properties:
export const metadata: Metadata = {
  title: "Start Conversation",
  description: "Autochat Start Conversation",
  openGraph: {
    url: "https://xitub.com/start-conversation/100071832524726", // your URL here
    type: "website",            // type of your content
    images: [
      {
        url: "https://xitub.com/autochat-icon.png",
        width: 1024,
        height: 1024,
        alt: "App Icon Image",
      },
    ],
    siteName: "Autochat",
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Custom meta tag that isn’t supported in the metadata export */}
        <meta property="fb:app_id" content="1771700623387280" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
