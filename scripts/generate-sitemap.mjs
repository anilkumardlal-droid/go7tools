
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://go7.in';
const ROOT = process.cwd();
const TOOLS_DIR = path.join(ROOT, 'src/pages/tools');
const OUTPUT_FILE = path.join(ROOT, 'public/sitemap.xml');

const urls = new Set([
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer'
]);

function scanDirectory(directory) {
  if (!fs.existsSync(directory)) return;

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
      continue;
    }

    if (!/\.(ts|tsx)$/.test(entry.name)) continue;

    const source = fs.readFileSync(fullPath, 'utf8');

    const pattern =
      /defineTool\s*\(\s*['"]([^'"]+)['"]\s*,\s*\{[\s\S]*?\bpath\s*:\s*['"]([^'"]+)['"]/g;

    for (const match of source.matchAll(pattern)) {
      const category = match[1].replace(/^\/+|\/+$/g, '');
      const slug = match[2].replace(/^\/+|\/+$/g, '');

      if (category && slug) {
        urls.add(`/${category}/${slug}`);
      }
    }
  }
}

scanDirectory(TOOLS_DIR);

const toolCount = urls.size - 6;

if (toolCount === 0) {
  throw new Error(
    'No tool URLs found. Sitemap was not updated. Check tool definitions.'
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls]
  .sort()
  .map(
    (url) =>
      `  <url>\n    <loc>${BASE_URL}${url}</loc>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');

console.log(`Sitemap generated successfully.`);
console.log(`Total URLs: ${urls.size}`);
console.log(`Tool URLs found: ${toolCount}`);
