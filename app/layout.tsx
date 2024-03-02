import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "111-cothink",
  description:
    "111-CoThink est un incubateur de startup et un espace de coworking, qui prends comme mission principale l'encouragement et l'accompagnement des jeunes à se lancer dans l'entrepreneuriat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <NavBar />
        <main className="max-w-10xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
