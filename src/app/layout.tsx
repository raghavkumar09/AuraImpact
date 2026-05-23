import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AuraImpact | Spiritual Sanctuary & Social Action NGO",
  description: "AuraImpact is a modern spiritual and social action platform uniting inner peace and outer impact. Explore our campaigns, volunteer networks, and support local initiatives.",
  keywords: "spiritual platform, social impact, charity NGO, meditation, food donation, community support, premium charity landing page",
  authors: [{ name: "AuraImpact Team" }],
  openGraph: {
    title: "AuraImpact | Spiritual Sanctuary & Social Action",
    description: "AuraImpact unites inner peace and outer humanitarian impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light" }}>
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

