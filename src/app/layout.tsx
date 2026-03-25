import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Diniz | Atleta Profissional de Beach Tennis",
  description: "Site oficial do atleta Mateus Diniz. Campeão Catarinense, múltiplos títulos estaduais e nacionais. Representando Santa Catarina e o Brasil nas principais arenas de Beach Tennis.",
  keywords: "beach tennis, atleta, Mateus Diniz, Santa Catarina, Brasil, campeão, esporte, patrocínio",
  authors: [{ name: "Mateus Diniz" }],
  openGraph: {
    title: "Mateus Diniz | Atleta Profissional de Beach Tennis",
    description: "Site oficial do atleta Mateus Diniz. Campeão Catarinense, múltiplos títulos estaduais e nacionais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
