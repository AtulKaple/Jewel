import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
});

export const metadata = {
  title: "Jewel",
  description: "Experience the luxury of fine jewelry",
  icons: "/favjewel.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
