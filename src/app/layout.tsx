import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Noto_Serif_Display } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

const notoSerifDisplay = Noto_Serif_Display({
    weight: ["700", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif-display",
});

export const metadata: Metadata = {
    title: "Farid Ardiansyah",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${notoSerifDisplay.variable}`}
        >
            <body className="container mx-auto flex flex-col items-center">
                {children}
                <Navigation />
            </body>
        </html>
    );
}
