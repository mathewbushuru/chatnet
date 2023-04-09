import { Inter } from "next/font/google";

import Providers from "@/components/Providers";

const font = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata = {
  title: "ChatNet",
  description: "Real time chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
