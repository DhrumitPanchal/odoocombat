import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("dark w-full h-screen", inter.className)}>
                <GoogleOAuthProvider clientId="252350409319-8k8t2r797e3pb4r005gdak1d6kmajgh7.apps.googleusercontent.com">
                    <Navbar />
                    {children}
                    <Footer />
                </GoogleOAuthProvider>
            </body>
        </html>
    );
}
