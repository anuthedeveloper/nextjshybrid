// app/api/robots/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Disallow: /api/
    Disallow: /admin/
    Allow: /public/

    Sitemap: https://yourwebsite.com/sitemap.xml
  `;

  return NextResponse.text(robotsTxt, { status: 200 });
}
