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

  // Return the response with correct headers for plain text
  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
