import { useState } from "react";
import TerminalBlock from "./TerminalBlock";

const tabs = [
  { id: "claude-plugin", label: "Claude Code Plugin" },
  { id: "mcp-json", label: "MCP Config" },
  { id: "cli", label: "CLI Only" },
];

export default function InstallTabs() {
  const [active, setActive] = useState("claude-plugin");

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-card border border-border mb-6">
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

      {active === "claude-plugin" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Two commands. Zero configuration. Claude Code gets 37 native tools instantly.
          </p>
          <TerminalBlock
            title="Claude Code Plugin"
            lines={[
              { type: "prompt", text: "$ pip install kindex[mcp]" },
              { type: "prompt", text: "$ claude mcp add --scope user --transport stdio kindex -- kin-mcp" },
              { type: "prompt", text: "$ kin init" },
              { type: "blank", text: "" },
              { type: "output", text: "Kindex initialized. Knowledge graph ready." },
              { type: "output", text: "37 MCP tools available:" },
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

      {active === "mcp-json" && (
        <div className="space-y-4">
          <p className="text-sm text-secondary">
            Add to any repo's <code className="font-mono text-xs bg-code-bg px-1.5 py-0.5 rounded border border-border">.mcp.json</code> for project-scoped access.
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
            Standalone CLI with 49 commands. Add LLM-powered extraction for richer knowledge capture.
          </p>
          <TerminalBlock
            title="CLI Installation"
            lines={[
              { type: "comment", text: "# Basic install" },
              { type: "prompt", text: "$ pip install kindex" },
              { type: "blank", text: "" },
              { type: "comment", text: "# With LLM-powered extraction" },
              { type: "prompt", text: "$ pip install kindex[llm]" },
              { type: "blank", text: "" },
              { type: "comment", text: "# Everything: LLM + vectors + MCP" },
              { type: "prompt", text: "$ pip install kindex[all]" },
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
