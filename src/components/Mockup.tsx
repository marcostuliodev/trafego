import Image from "next/image";
import { mockup } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

/**
 * SEÇÃO 8 — MOCKUPS
 * O e-book exibido dentro de molduras de celular, tablet e notebook
 * desenhadas em CSS puro (leve, sem bibliotecas).
 */
export function Mockup() {
  return (
    <section
      id="mockup"
      aria-labelledby="mockup-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={mockup.eyebrow}
          title={mockup.title}
          align="center"
          id="mockup-title"
        />

        {/* Composição de dispositivos */}
        <div className="relative flex w-full items-end justify-center gap-4 sm:gap-8">
          {/* Notebook */}
          <div className="hidden w-72 flex-col sm:flex lg:w-96">
            <div className="rounded-t-xl border border-ink-900/80 bg-ink-900 p-2 shadow-2xl shadow-forest-900/30">
              <div className="overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/ebook-cover.svg"
                  alt="Capa do e-book exibida na tela de um notebook"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="h-3 rounded-b-xl bg-gradient-to-b from-ink-700 to-ink-900" />
            <div className="mx-auto h-2 w-24 rounded-b-md bg-ink-900" />
          </div>

          {/* Tablet */}
          <div className="w-40 sm:w-48 lg:w-56">
            <div className="rounded-2xl border border-ink-900/80 bg-ink-900 p-2.5 shadow-2xl shadow-forest-900/30">
              <div className="overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/ebook-cover.svg"
                  alt="Capa do e-book exibida na tela de um tablet"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Celular */}
          <div className="w-32 sm:w-36 lg:w-40">
            <div className="rounded-[1.6rem] border border-ink-900/80 bg-ink-900 p-2 shadow-2xl shadow-forest-900/30">
              <div className="relative overflow-hidden rounded-[1.1rem] bg-white">
                {/* Notch */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink-900"
                />
                <Image
                  src="/images/ebook-cover.svg"
                  alt="Capa do e-book exibida na tela de um celular"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="max-w-2xl text-center text-base leading-relaxed text-ink-500 sm:text-lg">
          {mockup.text}
        </p>
      </div>
    </section>
  );
}