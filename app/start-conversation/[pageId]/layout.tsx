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
  facebook: {
    appId: "1771700623387280"
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
