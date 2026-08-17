import type { SVGProps } from "react";

/**
 * Ícones botânicos em linha (stroke, currentColor) — leves e consistentes.
 * Usados nos cards de conteúdo e benefícios.
 */

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4L19 19M19 5l-1.6 1.6M6.6 17.4L5 19" />
    </svg>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.2s6 6.4 6 10.8a6 6 0 0 1-12 0C6 9.6 12 3.2 12 3.2Z" />
      <path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z" />
      <path d="M5 19c3-6 7-10 12-12" />
    </svg>
  );
}

export function IconSprout(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 2.5-6.5 6.5-6.5 0 4-2.5 6.5-6.5 6.5Z" />
      <path d="M12 10.5C12 7 10 5 6.5 5 6.5 8.5 8.5 10.5 12 10.5Z" />
    </svg>
  );
}

export function IconBug(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 8.5a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0v-3a4 4 0 0 0-4-4Z" />
      <path d="M12 8.5V5.5M8 12.5H4.5M20 12.5H16M8 16.5H5M19 16.5h-3" />
      <path d="M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

export function IconMushroom(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 13a8 8 0 0 1 16 0Z" />
      <path d="M9 13v4.5a1.5 1.5 0 0 0 3 0V13M12 13v4.5a1.5 1.5 0 0 0 3 0V13" />
    </svg>
  );
}

export function IconThermometer(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 4.5a2 2 0 0 1 4 0v9.2a4 4 0 1 1-4 0Z" />
      <path d="M12 9v6" />
      <circle cx="12" cy="17.5" r="1.4" />
    </svg>
  );
}

export function IconWind(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8h9.5a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 16h6.5" />
    </svg>
  );
}

export function IconPot(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 10h10l-1 9a2 2 0 0 1-2 1.8h-4A2 2 0 0 1 8 19Z" />
      <path d="M12 10V6.5M9.5 6.5h5" />
      <path d="M12 6.5c0-1.5 1-2.5 2.5-3" />
    </svg>
  );
}

export function IconFlask(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 3h5M10.5 3v6L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 5.8v5.4c0 4.4 3 7.6 7 9.3 4-1.7 7-4.9 7-9.3V5.8Z" />
      <path d="m9 11.5 2.2 2.2L15.5 9" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M9 7.5h7M9 11h5" />
    </svg>
  );
}

export function IconDevice(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}