import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mamun | UI/UX Portfolio Website",
  description: "Lets build something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"light"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
