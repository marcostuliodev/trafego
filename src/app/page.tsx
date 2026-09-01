import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Transformation } from "@/components/Transformation";
import { Contents } from "@/components/Contents";
// SPRINT FRIO: TableOfContents e Benefits condensados — economiza ~800px scroll, aumenta chegada na Offer.
// Conteúdo repetido (Contents + TOC + Benefits = 3x mesmo). Mantidos comentados para reativação via flag ou tabs expansível futura.
// import { TableOfContents } from "@/components/TableOfContents";
// import { Benefits } from "@/components/Benefits";
import { SocialProof } from "@/components/SocialProof";
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
 * SPRINT FRIO (auditoria 5.8/10): meio condensado — TOC/Benefits removidos do fluxo principal.
 * Para reativar como tabs expansível: criar <DetailsTabs> que renderiza TOC+Benefits sob demanda.
 */
export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col pb-20 md:pb-0">
        <Hero />
        <Problem />
        <Transformation />
        <Contents />
        {/* <TableOfContents /> — oculto sprint frio: redundante com Contents; reativar via tabs se necessário */}
        {/* <Benefits /> — oculto sprint frio: benefícios já cobertos em Contents; CTA qualificado mantido na Offer */}
        <SocialProof />
        <Highlights />
        <Mockup />
        <Audience />
        <Offer />
        <FAQ />
        <FinalCTA />
      <StickyCTA />
      </main>
      <Footer />
    </>
  );
}