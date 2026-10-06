import type { Metadata } from "next";
import "./globals.css";
import AdminShell from "@/components/layout/AdminShell";

export const metadata: Metadata = {
  title: "MercyCare Administrative Portal",
  description:
    "MercyCare Home Health Services internal administrative management portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
