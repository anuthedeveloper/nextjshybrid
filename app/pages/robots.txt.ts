// pages/api/robots.txt.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Define the content of the robots.txt file
  const robotsTxt = `
    User-agent: *
    Disallow: /api/
    Disallow: /admin/
    Allow: /public/

    Sitemap: https://yourwebsite.com/sitemap.xml
  `;

  // Set the content-type to text/plain and return the robots.txt content
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robotsTxt);
}
