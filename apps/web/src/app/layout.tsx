import "./globals.css";
import "@repo/ui/styles.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graph Hive",
  description: "Visualize your data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} bg-[#1A1A1A]`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
