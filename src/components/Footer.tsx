import { footer, site } from "@/data/content";

/**
 * RODAPÉ — sem links externos desnecessários, disclaimer honesto.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <p className="font-serif text-lg text-cream-50">{site.productName}</p>
        <p className="max-w-3xl text-xs leading-relaxed text-forest-200/60 sm:text-sm">
          {footer.disclaimer}
        </p>
        <p className="text-xs text-forest-200/50">
          © {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}