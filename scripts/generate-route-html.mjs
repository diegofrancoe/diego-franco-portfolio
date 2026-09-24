import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const baseHtml = await readFile(resolve(dist, "index.html"), "utf8");
const siteUrl = "https://www.diegofrancoe.com";

const routes = [
  {
    output: "proyectos/ceniza.html",
    path: "/proyectos/ceniza",
    title: "Ceniza · CRM + AI Case Study | Diego Franco",
    description: "A CRM-first system connecting clients, quotes, productions, rentals, inventory, finance and controlled AI assistance.",
    image: "/ceniza-project-thumb.webp",
    imageAlt: "Ceniza CRM and AI case study by Diego Franco",
  },
  {
    output: "proyectos/naval.html",
    path: "/proyectos/naval",
    title: "Naval · Business System Case Study | Diego Franco",
    description: "A production B2B catalog and ERP connecting demand, production, purchasing, inventory, quality and reporting.",
    image: "/naval-project-thumb.webp",
    imageAlt: "Naval business system and ERP case study by Diego Franco",
  },
  {
    output: "proyectos/40-plus.html",
    path: "/proyectos/40-plus",
    title: "40+ · E-commerce Automation Case Study | Diego Franco",
    description: "A responsive product journey with WhatsApp-assisted orders, experience capture and automated content delivery.",
    image: "/40plus-project-thumb.webp",
    imageAlt: "40+ e-commerce automation case study by Diego Franco",
  },
];

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function replaceMeta(html, selector, value) {
  const escaped = escapeAttribute(value);
  return html.replace(
    new RegExp(`(<meta\\s+${selector.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s+content=")[^"]*("\\s*/?>)`, "i"),
    `$1${escaped}$2`,
  );
}

function routeHtml(route) {
  const url = `${siteUrl}${route.path}`;
  const image = `${siteUrl}${route.image}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: route.title,
    description: route.description,
    url,
    image,
    author: { "@type": "Person", name: "Diego Franco Echeverri", url: `${siteUrl}/` },
  };

  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(route.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${url}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll("</", "<\\/")}</script>`);

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'property="og:type"', "article");
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', route.description);
  html = replaceMeta(html, 'property="og:url"', url);
  html = replaceMeta(html, 'property="og:image"', image);
  html = replaceMeta(html, 'property="og:image:alt"', route.imageAlt);
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', route.description);
  html = replaceMeta(html, 'name="twitter:image"', image);
  html = replaceMeta(html, 'name="twitter:image:alt"', route.imageAlt);
  return html;
}

for (const route of routes) {
  const output = resolve(dist, route.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, routeHtml(route));
}

const notFoundTitle = "Page not found | Diego Franco";
const notFoundDescription = "The page you requested could not be found. Explore Diego Franco's AI solutions and product case studies.";
let notFoundHtml = baseHtml
  .replace(/<title>[^<]*<\/title>/i, `<title>${notFoundTitle}</title>`)
  .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${siteUrl}/" />`);
notFoundHtml = replaceMeta(notFoundHtml, 'name="description"', notFoundDescription);
notFoundHtml = replaceMeta(notFoundHtml, 'name="robots"', "noindex, nofollow");
await writeFile(resolve(dist, "404.html"), notFoundHtml);
