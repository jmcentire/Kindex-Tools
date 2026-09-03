import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const cardPath = "public/.well-known/mcp/server-card.json";
const card = JSON.parse(read(cardPath));
const version = card.serverInfo.version;
const toolCount = card.capabilities.tools.length;
const errors = [];

const requiredText = new Map([
  ["README.md", [`${toolCount} MCP tools`, "80+ CLI commands"]],
  ["src/layouts/BaseLayout.astro", [`${toolCount} MCP tools`, "80+ CLI commands"]],
  ["src/pages/index.astro", [`v${version}`, `${toolCount} MCP tools`, "80+ CLI commands"]],
  ["src/components/InstallTabs.tsx", [`${toolCount} MCP tools`]],
]);

for (const [path, values] of requiredText) {
  const contents = read(path);
  for (const value of values) {
    if (!contents.includes(value)) {
      errors.push(`${path} does not contain ${JSON.stringify(value)}`);
    }
  }
}

const coreRoot = process.env.KINDEX_REPO
  ? resolve(process.env.KINDEX_REPO)
  : resolve(root, "../kindex");
const mirrors = [
  ["docs/.well-known/mcp/server-card.json", cardPath],
  ["docs/human-guide.md", "public/human-guide.md"],
  ["docs/llms-full.txt", "public/llms-full.txt"],
  ["docs/llms.txt", "public/llms.txt"],
  ["docs/mcp-agent-guide.md", "public/mcp-agent-guide.md"],
];

let mirrorChecks = 0;
if (existsSync(resolve(coreRoot, "docs"))) {
  for (const [corePath, sitePath] of mirrors) {
    const coreContents = readFileSync(resolve(coreRoot, corePath), "utf8");
    if (coreContents !== read(sitePath)) {
      errors.push(`${sitePath} differs from ${corePath}`);
    }
    mirrorChecks += 1;
  }
} else if (process.env.KINDEX_REPO_REQUIRED === "1") {
  errors.push(`core repo is required but missing at ${coreRoot}`);
} else {
  console.warn(
    `Release metadata warning: core repo missing at ${coreRoot}; skipped ${mirrors.length} mirror checks`,
  );
}

if (errors.length > 0) {
  console.error("Release metadata check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Release metadata check passed: v${version}, ${toolCount} MCP tools, 80+ CLI commands, ${mirrorChecks} mirrors`,
);
