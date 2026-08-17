import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Transformation } from "@/components/Transformation";
import { Contents } from "@/components/Contents";
import { TableOfContents } from "@/components/TableOfContents";
import { Benefits } from "@/components/Benefits";
import { Highlights } from "@/components/Highlights";
import { Mockup } from "@/components/Mockup";
import { Audience } from "@/components/Audience";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

/**
 * Landing page — "Orquídeas: Princípios básicos para cultivar"
 * Fluxo psicológico: ATENÇÃO → IDENTIFICAÇÃO → COMPREENSÃO → VALOR → CONFIANÇA → AÇÃO
 */
export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col pb-20 md:pb-0">
        <Hero />
        <Problem />
        <Transformation />
        <Contents />
        <TableOfContents />
        <Benefits />
        <Highlights />
        <Mockup />
        <Audience />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}