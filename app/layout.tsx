import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EammierHub | Premium Mobile Data Subscription",
  description: "Fast, secure, and affordable mobile data subscription for Nigeria with a premium fintech-inspired experience.",
  keywords: ["EammierHub", "Data subscription", "Mobile data", "Airtime", "Fintech UI", "Wallet balance", "Nigeria"],
  authors: [{ name: "EammierHub Tech Solutions" }],
  openGraph: {
    title: "EammierHub | Premium Mobile Data Subscription",
    description: "Fast, secure, and affordable mobile data subscription for Nigeria with a premium fintech-inspired experience.",
    url: "https://eammierhub.com",
    type: "website",
    siteName: "EammierHub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full font-sans bg-[#F6FFF5] text-[#1F2937]">{children}</body>
    </html>
  );
}
