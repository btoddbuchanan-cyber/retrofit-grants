import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenHome Canada - Retrofit Grants Program",
  description:
    "Apply for federal retrofit grants to make your home more energy efficient. Funding for heat pumps, solar power, insulation, windows, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
