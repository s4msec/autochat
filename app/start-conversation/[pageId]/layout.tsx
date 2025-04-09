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

export const metadata: Metadata = {
  title: "Start Conversation",
  description: "Autochat Start Conversation",
  openGraph: {
    images: [
      {
        url: "https://xitub.com/autochat-icon.png", // Adjust with your image path or absolute URL.
        width: 1024,                       // Recommended width for social sharing.
        height: 1024,                       // Recommended height for social sharing.
        alt: "App Icon Image", // A text alternative for the image.
      },
    ],
    siteName: "Autochat", // Optional: Your website or application name.
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
