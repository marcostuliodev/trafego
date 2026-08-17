import { ImageResponse } from "next/og";

// Necessário para static export (output: "export")
export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "E-book Orquídeas — Princípios básicos para cultivar";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #163523 0%, #0c2013 100%)",
          color: "#f6f1e5",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 180, height: 2, background: "#c39a4b" }} />
        </div>
        <div style={{ fontSize: 72, letterSpacing: 6, fontWeight: 600 }}>
          ORQUÍDEAS
        </div>
        <div
          style={{
            fontSize: 28,
            letterSpacing: 3,
            color: "#c39a4b",
            marginTop: 16,
          }}
        >
          PRINCÍPIOS BÁSICOS PARA CULTIVAR
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 2,
            color: "#8cb79c",
            marginTop: 40,
          }}
        >
          GUIA PRÁTICO DE CULTIVO
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 180, height: 2, background: "#c39a4b" }} />
        </div>
      </div>
    ),
    size,
  );
}