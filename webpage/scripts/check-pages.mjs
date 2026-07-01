import fs from "node:fs";
import path from "node:path";

const files = [
  path.join("src", "App.tsx"),
  path.join("index.html"),
  path.join("public", "templates", "waitlist-verification-email.html"),
];

const source = files
  .map((file) => `\n/* ${file} */\n${fs.readFileSync(file, "utf8")}`)
  .join("\n");

const requiredSnippets = [
  'id="features"',
  'id="how"',
  'id="pricing"',
  'id="faq"',
  'id="download"',
  "baseHash === '#terms'",
  "baseHash === '#privacy'",
  "baseHash === '#support'",
  "baseHash === '#accessibility'",
  "baseHash === '#licenses'",
  "baseHash === '#requirements'",
  "baseHash === '#cookies'",
  "b9851",
];

for (const snippet of requiredSnippets) {
  if (!source.includes(snippet)) {
    throw new Error(`Missing required public webpage contract snippet: ${snippet}`);
  }
}

const forbidden = [
  "Project-Merlin-Private",
  "Rydell",
  "rydell.hall",
  "DD4lv7NNd8=",
  "Langflow flow",
  "7b074238",
  "Lemon Squeezy API key",
  "b9729",
  "CUDA 13.3",
  "7e3c834a",
  "9b2d847c",
  "8a4c847e",
];

for (const term of forbidden) {
  if (source.includes(term)) {
    throw new Error(`Forbidden public webpage term found: ${term}`);
  }
}

console.log(`Webpage contract check passed for ${requiredSnippets.length} required snippets.`);
