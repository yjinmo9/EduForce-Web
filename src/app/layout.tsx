import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduForce - 당신만의 AI 조교를 만드세요",
  description: "교육의 미래, 우리가 복제합니다. 최첨단 AI 기술로 개별 맞춤형 교육을 제공하는 EduForce입니다.",
  keywords: "AI 교육, AI 교수님, AI 내신 선생님, AI 자소서 코치, 교육 혁신, 맞춤형 교육",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
