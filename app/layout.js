import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "300", "500", "700"],
});

export const metadata = {
  title: "My task Board",
  description: "Task manager app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
