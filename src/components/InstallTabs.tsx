import { useState } from "react";
import TerminalBlock from "./TerminalBlock";

const tabs = [
  { id: "claude-plugin", label: "Claude Code" },
  { id: "codex", label: "Codex" },
  { id: "gemini", label: "Gemini CLI" },
  { id: "opencode", label: "OpenCode" },
  { id: "cursor", label: "Cursor" },
  { id: "mcp-json", label: "MCP Config" },
  { id: "cli", label: "CLI Only" },
];

export default function InstallTabs() {
  const [active, setActive] = useState("claude-plugin");

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1 p-1 rounded-lg bg-card border border-border mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              active === tab.id
                ? "bg-primary text-white"
                : "text-secondary hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted mb-4">
        Install kindex with whichever tool you already use:{" "}
        <code className="font-mono bg-code-bg px-1 rounded border border-border">pip install &apos;kindex[mcp]&apos;</code>,{" "}
        <code className="font-mono bg-code-bg px-1 rounded border border-border">uv tool install &apos;kindex[mcp]&apos;</code>,{" "}
        <code className="font-mono bg-code-bg px-1 rounded border border-border">uvx --from &apos;kindex[mcp]&apos; kin-mcp</code>, or
        clone + <code className="font-mono bg-code-bg px-1 rounded border border-border">make install</code>.
      </p>

      {active === "claude-plugin" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Two commands. Zero configuration. Claude Code gets 38 native tools instantly.
          </p>
          <TerminalBlock
            title="Claude Code Plugin"
            lines={[
              { type: "prompt", text: "$ pip install 'kindex[mcp]'" },
              { type: "prompt", text: "$ claude mcp add --scope user --transport stdio kindex -- kin-mcp" },
              { type: "prompt", text: "$ kin init" },
              { type: "blank", text: "" },
              { type: "output", text: "Kindex initialized. Knowledge graph ready." },
              { type: "output", text: "38 MCP tools available:" },
              { type: "output", text: "  search, add, context, show, ask, learn, ingest," },
              { type: "output", text: "  link, list_nodes, status, suggest, graph_stats," },
              { type: "output", text: "  graph_heal, graph_merge, changelog," },
              { type: "output", text: "  tag_start, tag_update, tag_resume," },
              { type: "output", text: "  task_add, task_list, task_done," },
              { type: "output", text: "  remind_create, remind_list, remind_snooze," },
              { type: "output", text: "  remind_done, remind_check, remind_exec," },
              { type: "output", text: "  watch_add, watch_list, watch_resolve," },
              { type: "output", text: "  mode_activate, mode_list, mode_show," },
              { type: "output", text: "  mode_create, mode_export, mode_import, mode_seed" },
            ]}
          />
        </div>
      )}

      {active === "codex" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Register the same MCP server with Codex, then install AGENTS.md directives so Codex uses kindex proactively.
          </p>
          <TerminalBlock
            title="Codex"
            lines={[
              { type: "prompt", text: "$ pip install 'kindex[mcp]'" },
              { type: "prompt", text: "$ kin init" },
              { type: "prompt", text: "$ kin setup-codex-mcp" },
              { type: "prompt", text: "$ kin setup-agents-md --install --global" },
              { type: "blank", text: "" },
              { type: "output", text: "Kindex registered in ~/.codex/config.toml" },
              { type: "output", text: "AGENTS.md directives installed for proactive use." },
              { type: "blank", text: "" },
              { type: "comment", text: "# Backfill saved Codex sessions" },
              { type: "prompt", text: "$ kin ingest codex-sessions" },
            ]}
            copyText={"pip install 'kindex[mcp]'\nkin init\nkin setup-codex-mcp\nkin setup-agents-md --install --global\nkin ingest codex-sessions"}
          />
        </div>
      )}

      {active === "gemini" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Adds <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">mcpServers.kindex</code> to <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">~/.gemini/settings.json</code> and writes recommended directives to <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">~/.gemini/GEMINI.md</code>.
          </p>
          <TerminalBlock
            title="Gemini CLI"
            lines={[
              { type: "prompt", text: "$ pip install 'kindex[mcp]'" },
              { type: "prompt", text: "$ kin init" },
              { type: "prompt", text: "$ kin setup-gemini-mcp" },
              { type: "prompt", text: "$ kin setup-gemini-md --install" },
              { type: "blank", text: "" },
              { type: "output", text: "Added Gemini MCP server: kindex -> kin-mcp" },
              { type: "output", text: "Wrote ~/.gemini/settings.json" },
              { type: "output", text: "Appended kindex directives to ~/.gemini/GEMINI.md" },
            ]}
            copyText={"pip install 'kindex[mcp]'\nkin init\nkin setup-gemini-mcp\nkin setup-gemini-md --install"}
          />
        </div>
      )}

      {active === "opencode" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Adds <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">mcp.kindex</code> to <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">~/.config/opencode/opencode.json</code>. OpenCode also reads <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">AGENTS.md</code>, so the same directives Codex uses apply.
          </p>
          <TerminalBlock
            title="OpenCode"
            lines={[
              { type: "prompt", text: "$ pip install 'kindex[mcp]'" },
              { type: "prompt", text: "$ kin init" },
              { type: "prompt", text: "$ kin setup-opencode-mcp" },
              { type: "prompt", text: "$ kin setup-agents-md --install --global" },
              { type: "blank", text: "" },
              { type: "output", text: "Added OpenCode MCP server: kindex -> kin-mcp" },
              { type: "output", text: "Wrote ~/.config/opencode/opencode.json" },
            ]}
            copyText={"pip install 'kindex[mcp]'\nkin init\nkin setup-opencode-mcp\nkin setup-agents-md --install --global"}
          />
        </div>
      )}

      {active === "cursor" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Adds <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">mcpServers.kindex</code> to <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">~/.cursor/mcp.json</code> and installs an always-applied rule at <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">~/.cursor/rules/kindex.mdc</code>.
          </p>
          <TerminalBlock
            title="Cursor"
            lines={[
              { type: "prompt", text: "$ pip install 'kindex[mcp]'" },
              { type: "prompt", text: "$ kin init" },
              { type: "prompt", text: "$ kin setup-cursor-mcp" },
              { type: "prompt", text: "$ kin setup-cursor-rules --install" },
              { type: "blank", text: "" },
              { type: "output", text: "Added Cursor MCP server: kindex -> kin-mcp" },
              { type: "output", text: "Wrote ~/.cursor/mcp.json" },
              { type: "output", text: "Created ~/.cursor/rules/kindex.mdc" },
            ]}
            copyText={"pip install 'kindex[mcp]'\nkin init\nkin setup-cursor-mcp\nkin setup-cursor-rules --install"}
          />
        </div>
      )}

      {active === "mcp-json" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Add to any repo's <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">.mcp.json</code> for project-scoped access (Claude Code, Cursor, and most other MCP clients accept this shape).
          </p>
          <TerminalBlock
            title=".mcp.json"
            lines={[
              { type: "output", text: "{" },
              { type: "output", text: '  "mcpServers": {' },
              { type: "output", text: '    "kindex": {' },
              { type: "output", text: '      "command": "kin-mcp"' },
              { type: "output", text: "    }" },
              { type: "output", text: "  }" },
              { type: "output", text: "}" },
            ]}
            copyText='{"mcpServers":{"kindex":{"command":"kin-mcp"}}}'
          />
        </div>
      )}

      {active === "cli" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Standalone CLI with 53+ commands. Install however you prefer; combine extras for LLM-powered extraction, vectors, and reminders.
          </p>
          <TerminalBlock
            title="CLI Installation"
            lines={[
              { type: "comment", text: "# pip" },
              { type: "prompt", text: "$ pip install kindex" },
              { type: "blank", text: "" },
              { type: "comment", text: "# uv" },
              { type: "prompt", text: "$ uv tool install kindex" },
              { type: "blank", text: "" },
              { type: "comment", text: "# from source" },
              { type: "prompt", text: "$ git clone https://github.com/jmcentire/kindex && cd kindex && make install" },
              { type: "blank", text: "" },
              { type: "comment", text: "# everything: LLM + vectors + MCP + reminders" },
              { type: "prompt", text: "$ pip install 'kindex[all]'" },
              { type: "blank", text: "" },
              { type: "prompt", text: "$ kin init" },
              { type: "output", text: "Kindex initialized at ~/.kindex" },
            ]}
          />
        </div>
      )}
    </div>
  );
}
