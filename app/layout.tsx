import type { Metadata } from "next";
import "./globals.css";
import { MotionEffects } from "./motion-effects";

export const metadata: Metadata = {
  title: "Emberline",
  description: "Find the right electrification path for a more resilient, lower-friction home.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<MotionEffects /></body>
    </html>
  );
}
