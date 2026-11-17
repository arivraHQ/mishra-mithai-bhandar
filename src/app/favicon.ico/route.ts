import { NextResponse } from "next/server";

export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="8" fill="#8C1C13"/>
  <circle cx="16" cy="16" r="13" stroke="#E8A317" stroke-width="1.5" fill="none" opacity="0.6"/>
  <text x="16" y="22" font-family="serif" font-size="16" font-weight="bold" fill="#FFF8EC" text-anchor="middle">म</text>
</svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
