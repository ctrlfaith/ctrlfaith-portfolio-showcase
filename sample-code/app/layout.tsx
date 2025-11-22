import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ctrlfaith • Portfolio",
  description: "Phuriphatthanachai Rattanatham — Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh antialiased text-slate-900`}
        style={{
          background: "#f8f8f8",
        }}
      >
        {/* Background Spotlight */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 600px at 50% -10%, rgba(255,255,255,0.85), transparent 70%)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
