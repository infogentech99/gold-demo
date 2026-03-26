import DisableInspect from "@/app/components/DisableInspect";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gold-demo-one.vercel.app/"),

  openGraph: {
    title: "Gold Wedding Invitation - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    url: "https://gold-demo-one.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Gold Wedding Invitation",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Gold Wedding Invitation - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://gold-demo-one.vercel.app/",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DisableInspect />  
        {children}
      </body>
    </html>
  );
}
