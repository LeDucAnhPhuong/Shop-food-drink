"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { motion, AnimatePresence } from "framer-motion";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`w-[100%] select-none snap-mandatory   `}>
        <AnimatePresence>
          <SkeletonTheme baseColor="#cccccc" highlightColor="#f5f5f5">
            <Header></Header>
            {children}
            <Footer></Footer>
          </SkeletonTheme>
        </AnimatePresence>
      </body>
    </html>
  );
}
