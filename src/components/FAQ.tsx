"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { trackEvent } from "@/lib/analytics";

/**
 * SEÇÃO 12 — QUEBRA DE OBJEÇÕES (FAQ)
 * Accordion acessível (aria-expanded / aria-controls).
 * Dispara evento faq_open no analytics ao abrir uma pergunta.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    const next = openIndex === index ? null : index;
    setOpenIndex(next);
    if (next !== null) {
      trackEvent("faq_open", { question: faq.items[index].question });
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          align="center"
          id="faq-title"
        />

        <div className="w-full divide-y divide-forest-200/70 rounded-3xl border border-forest-200/70 bg-white shadow-sm">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-50 sm:px-8"
                  >
                    <span className="font-serif text-lg text-ink-900 sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-200 text-forest-700 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-6 sm:px-8"
                >
                  <p className="max-w-2xl text-base leading-relaxed text-ink-500">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}