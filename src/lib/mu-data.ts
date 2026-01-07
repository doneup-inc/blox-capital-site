import fs from "node:fs";
import path from "node:path";

export interface LicensingEntry {
  jurisdiction: string;
  detail: string;
  status: string;
}

export interface UpdateEntry {
  date: string;
  title: string;
  detail: string;
}

const REPO_ROOT = path.resolve(process.cwd(), "..");
const GROUNDWORK_FILE = path.join(
  REPO_ROOT,
  "investor_messaging",
  "pre_application_groundwork.md",
);

function readGroundwork(): string {
  try {
    return fs.readFileSync(GROUNDWORK_FILE, "utf8");
  } catch (error) {
    console.warn("Unable to read groundwork file", GROUNDWORK_FILE, error);
    return "";
  }
}

function stripMarkdownLinks(input: string): string {
  return input.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
}

function cleanLine(line: string): string {
  return stripMarkdownLinks(line)
    .replace(/^[-*]\s*/, "")
    .replace(/`/g, "")
    .trim();
}

const STATUS_OVERRIDES: Record<string, string> = {
  "Michigan (DIFS — Money Transmission Services Act)": "Pre-filing",
  "New York (DFS — Banking Law Article 13-B)": "Drafting",
  "California (DFPI — Money Transmission Act)": "Drafting",
};

export function getLicensingEntries(): LicensingEntry[] {
  const text = readGroundwork();
  if (!text) return [];
  const marker = "## State-specific licensing deep dives";
  const start = text.indexOf(marker);
  if (start === -1) return [];
  const section = text.slice(start + marker.length);
  const chunks = section.split(/\n###\s+/).slice(1); // remove first empty chunk
  return chunks.map((chunk) => {
    const [rawHeading, ...rest] = chunk.split("\n");
    const jurisdiction = rawHeading.trim();
    const bulletLines = rest
      .filter((line) => line.trim().startsWith("-"))
      .slice(0, 3)
      .map(cleanLine);
    return {
      jurisdiction,
      detail: bulletLines.join(" "),
      status: STATUS_OVERRIDES[jurisdiction] ?? "Scoping",
    };
  });
}

export function getGroundworkUpdates(): UpdateEntry[] {
  const text = readGroundwork();
  if (!text) return [];
  const titleMatch = text.match(/#\s+[^\n]+\(([^)]+)\)/);
  const docDate = titleMatch ? titleMatch[1] : "2026";
  const sections = [
    "Regulatory + Licensing Prep",
    "Product + Technical Controls",
    "Operations + People",
  ];
  return sections.map((section) => {
    const marker = `## ${section}`;
    const start = text.indexOf(marker);
    if (start === -1) {
      return {
        date: docDate,
        title: section,
        detail: "See source checklist for details.",
      };
    }
    const slice = text.slice(start + marker.length);
    const nextSection = slice.indexOf("\n## ");
    const body = nextSection === -1 ? slice : slice.slice(0, nextSection);
    const bullets = body
      .split("\n")
      .filter((line) => line.trim().startsWith("-"))
      .slice(0, 2)
      .map(cleanLine);
    return {
      date: docDate,
      title: section,
      detail: bullets.join(" "),
    };
  });
}
