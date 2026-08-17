import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.lawyer}, ${SITE.designation}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Malik Law Associates, led by Malik Atif Qasim, Advocate High Court, provides counsel in tax, criminal, and land & property matters across Punjab, Pakistan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-8">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
