import type { Metadata } from "next";
import localFont from "next/font/local";
import '@styles/globals.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pocket Tabata",
  description: "Create and perform your circuit training quickly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main">
          <div className="solid_background"/>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  );
}
