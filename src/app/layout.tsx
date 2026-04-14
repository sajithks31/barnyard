import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/ppneuemontreal-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-montreal",
});

export const metadata: Metadata = {
  title: "Barnyard — Website — 2026",
  description: "Creating Stories That Move.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppNeueMontreal.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
