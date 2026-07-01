import fs from "node:fs";
import path from "node:path";

const sourcePath = path.join("src", "App.tsx");
const source = fs.readFileSync(sourcePath, "utf8");
const failures = [];

function fail(message) {
  failures.push(message);
}

function getAttribute(tag, name) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{["']([^"']*)["']\\})`);
  const match = tag.match(pattern);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function lineFor(index) {
  return source.slice(0, index).split(/\r?\n/).length;
}

for (const match of source.matchAll(/<img\b[\s\S]*?>/g)) {
  const tag = match[0];
  if (getAttribute(tag, "alt") === null) {
    fail(`Image missing alt attribute near line ${lineFor(match.index ?? 0)}.`);
  }
}

const labelTargets = new Set();
for (const match of source.matchAll(/<label\b[^>]*>/g)) {
  const target = getAttribute(match[0], "htmlFor");
  if (target) {
    labelTargets.add(target);
  }
}

const controlIds = new Set();
for (const match of source.matchAll(/<(input|select|textarea)\b[^>]*>/g)) {
  const tag = match[0];
  const type = getAttribute(tag, "type");
  if (type === "hidden") {
    continue;
  }

  const id = getAttribute(tag, "id");
  if (!id) {
    fail(`${match[1]} missing id near line ${lineFor(match.index ?? 0)}.`);
    continue;
  }
  controlIds.add(id);

  if (!labelTargets.has(id)) {
    fail(`${match[1]}#${id} has no matching label htmlFor.`);
  }
}

for (const target of labelTargets) {
  if (!controlIds.has(target)) {
    fail(`label htmlFor="${target}" has no matching form control id.`);
  }
}

const requiredSourceSnippets = [
  'aria-label="Open the Ghostwheel GitHub repository"',
  "Accessibility Statement",
  "Keyboard Navigation & Focus",
  "Screen Reader Support",
  "Visual Contrast & Font Scaling",
  "focus:ring",
  "semantic HTML5 elements",
];

for (const snippet of requiredSourceSnippets) {
  if (!source.includes(snippet)) {
    fail(`Missing accessibility contract snippet: ${snippet}`);
  }
}

if (failures.length > 0) {
  console.error("Accessibility contract check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Accessibility contract check passed.");
