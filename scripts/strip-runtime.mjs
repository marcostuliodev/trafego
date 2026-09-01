/**
 * ============================================================
 * strip-runtime.mjs — Remove o runtime do App Router do export estático.
 * ============================================================
 *
 * Contexto: esta landing page é 100% estática (output: "export") e NÃO possui
 * nenhum componente client ("use client"). Mesmo assim, o Next.js App Router
 * injeta no HTML o runtime React + RSC (~450KB de JS) para hidratação e
 * navegação client-side — que nesta página são desnecessários.
 *
 * Este script roda após `next build` e remove:
 *   1. Scripts externos do framework  (<script src="/_next/static/chunks/*.js">)
 *   2. Payload RSC inline             (<script>self.__next_f.push(...)</script>)
 *   3. Preload hints de scripts       (<link rel="preload" as="script">)
 *   4. Arquivos JS/CSS órfãos do diretório out/
 *
 * O script inline próprio da página (analytics + sticky CTA + FAQ) é PRESERVADO.
 *
 * ⚠️ IMPORTANTE: se algum dia for adicionado um componente client ("use client"),
 * este script quebrará a hidratação. Nesse caso, remova a chamada deste script
 * do package.json e reavalie a estratégia de performance.
 * ============================================================
 */
import { readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";

/** Remove o runtime do framework de um HTML e retorna o HTML limpo. */
function stripRuntime(html) {
  let out = html;

  // 1. Scripts externos do framework (inclui noModule e o script _R_)
  out = out.replace(
    /<script[^>]*src="\/_next\/static\/chunks\/[^"]*"[^>]*>\s*<\/script>/g,
    "",
  );

  // 2. Payload RSC inline (self.__next_f.push / (self.__next_f=...).push)
  out = out.replace(/<script>\(?self\.__next_f[\s\S]*?<\/script>/g, "");

  // 3. Preload hints de scripts
  out = out.replace(/<link rel="preload" as="script"[^>]*>/g, "");

  return out;
}

/** Coleta todos os arquivos .html sob um diretório. */
function collectHtmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(full, acc);
    } else if (entry.name.endsWith(".html")) {
      acc.push(full);
    }
  }
  return acc;
}

if (!existsSync(OUT_DIR)) {
  console.error("[strip-runtime] Diretório out/ não encontrado. Rode `next build` antes.");
  process.exit(1);
}

// --- Passo 1: limpar HTMLs ---
const htmlFiles = collectHtmlFiles(OUT_DIR);
let strippedCount = 0;

for (const file of htmlFiles) {
  const original = readFileSync(file, "utf8");
  const cleaned = stripRuntime(original);
  if (cleaned !== original) {
    writeFileSync(file, cleaned, "utf8");
    strippedCount++;
    console.log(`[strip-runtime] ${file}: runtime removido`);
  }
}

if (strippedCount === 0) {
  console.warn("[strip-runtime] Nenhum HTML alterado — verifique se o runtime ainda está presente.");
}

// --- Passo 2: remover arquivos órfãos ---
const chunksDir = join(OUT_DIR, "_next", "static", "chunks");
if (existsSync(chunksDir)) {
  for (const entry of readdirSync(chunksDir)) {
    if (entry.endsWith(".js") || entry.endsWith(".css")) {
      rmSync(join(chunksDir, entry), { force: true });
      console.log(`[strip-runtime] removido órfão: chunks/${entry}`);
    }
  }
}

// Manifestos do build (referenciados apenas pelo runtime removido)
const staticDir = join(OUT_DIR, "_next", "static");
if (existsSync(staticDir)) {
  for (const entry of readdirSync(staticDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const buildIdDir = join(staticDir, entry.name);
      for (const file of readdirSync(buildIdDir)) {
        if (
          file.endsWith("_buildManifest.js") ||
          file.endsWith("_ssgManifest.js") ||
          file.endsWith("_clientMiddlewareManifest.js")
        ) {
          rmSync(join(buildIdDir, file), { force: true });
          console.log(`[strip-runtime] removido órfão: ${entry.name}/${file}`);
        }
      }
    }
  }
}

// Favicon duplicado dentro de _next/static/media (o público /favicon.ico é o usado)
const mediaDir = join(OUT_DIR, "_next", "static", "media");
if (existsSync(mediaDir)) {
  for (const entry of readdirSync(mediaDir)) {
    if (entry.startsWith("favicon.")) {
      rmSync(join(mediaDir, entry), { force: true });
      console.log(`[strip-runtime] removido órfão: media/${entry}`);
    }
  }
}

console.log("[strip-runtime] Concluído.");