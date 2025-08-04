import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosen's portfolio",
  description: "Small portfolio of Rosen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Intel+One+Mono:ital,wght@0,300..700;1,300..700&display=swap');`}
        </style>
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen h-[100vh]">
        {children}
      </body>
    </html>
  );
}