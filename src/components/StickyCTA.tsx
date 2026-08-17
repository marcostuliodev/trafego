"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "@/components/cta-button";

/**
 * Barra de CTA fixa — visível apenas no mobile, após rolar além do hero.
 * Mantém o botão de compra sempre acessível em telas pequenas.
 * Quando oculta, fica fora da tabulação (inert) para não confundir leitores de tela.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Aparece depois de ~80% da altura da viewport rolada
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gold-500/30 bg-forest-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CTAButton
        id="cta-sticky"
        eventName="sticky_cta_click"
        variant="gold"
        size="md"
        className="w-full"
      >
        QUERO MEU E-BOOK
      </CTAButton>
    </div>
  );
}