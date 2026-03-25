import { useState } from "react";

const mcpTools = [
  { name: "search", desc: "Find relevant knowledge by query (filter by --tags)" },
  { name: "add", desc: "Add knowledge with type, weight, and tags" },
  { name: "context", desc: "Get tiered context for current session" },
  { name: "show", desc: "Display a specific node's full details" },
  { name: "ask", desc: "Ask questions across your knowledge graph" },
  { name: "learn", desc: "Extract and store knowledge from text" },
  { name: "link", desc: "Create typed edges between nodes" },
  { name: "list_nodes", desc: "Browse nodes with filters (type, status, tags, audience)" },
  { name: "status", desc: "Graph overview and health" },
  { name: "suggest", desc: "AI-powered suggestions for what to capture" },
  { name: "graph_stats", desc: "Density, components, degree distribution" },
  { name: "graph_heal", desc: "Diagnose graph health: orphans, bridges, fading nodes" },
  { name: "graph_merge", desc: "Merge duplicate nodes, moving edges and archiving source" },
  { name: "changelog", desc: "What changed, by whom, when" },
  { name: "ingest", desc: "Ingest from GitHub, git, files, sessions, code (ctags/cscope/tree-sitter)" },
  { name: "tag_start", desc: "Start a named session tag for work context" },
  { name: "tag_update", desc: "Update, segment, pause, or end a session tag" },
  { name: "tag_resume", desc: "Resume a session with full context injection" },
  { name: "task_add", desc: "Create actionable work items linked to concepts" },
  { name: "task_list", desc: "List and filter tasks by status and priority" },
  { name: "task_done", desc: "Mark tasks completed with optional summary" },
  { name: "remind_create", desc: "Create time-based reminders with natural language parsing" },
  { name: "remind_list", desc: "List all active reminders" },
  { name: "remind_snooze", desc: "Defer a reminder to a later time" },
  { name: "remind_done", desc: "Mark a reminder as completed" },
  { name: "remind_check", desc: "Run the reminder check cycle for due items" },
  { name: "remind_exec", desc: "Manually trigger a reminder's action" },
  { name: "mode_activate", desc: "Activate a conversation mode -- returns priming artifact" },
  { name: "mode_list", desc: "List available modes (built-in and custom)" },
  { name: "mode_show", desc: "Show mode details: primer, boundary, permissions" },
  { name: "mode_create", desc: "Create a custom mode from primer/boundary/permissions" },
  { name: "mode_export", desc: "Export a mode as PII-free portable artifact" },
  { name: "mode_import", desc: "Import a mode from a portable artifact" },
  { name: "mode_seed", desc: "Seed the five default conversation modes" },
  { name: "watch_add", desc: "Flag items needing ongoing attention (flaky tests, tech debt)" },
  { name: "watch_list", desc: "List active watches with status" },
  { name: "watch_resolve", desc: "Archive a watch when the issue is resolved" },
];

const cliGroups = [
  {
    title: "Knowledge",
    commands: [
      { name: "add", desc: "Add a knowledge node (--tags, --type)" },
      { name: "search", desc: "Search the graph (--tags, --mine)" },
      { name: "show", desc: "Show node details" },
      { name: "ask", desc: "Ask questions across nodes" },
      { name: "learn", desc: "Extract knowledge from text" },
      { name: "ingest", desc: "Bulk import from files, code repos, GitHub" },
    ],
  },
  {
    title: "Graph",
    commands: [
      { name: "link", desc: "Create edges between nodes" },
      { name: "graph stats", desc: "Graph metrics and health" },
      { name: "graph heal", desc: "Find orphans, bridges, fading nodes" },
      { name: "graph merge", desc: "Merge duplicate nodes" },
      { name: "list", desc: "List and filter nodes (--tags, --audience)" },
      { name: "context", desc: "Get tiered context output" },
    ],
  },
  {
    title: "Operations",
    commands: [
      { name: "constraint", desc: "Set deploy blockers" },
      { name: "directive", desc: "Encode preferences" },
      { name: "watch", desc: "Flag attention items" },
      { name: "checkpoint", desc: "Pre-flight checks" },
      { name: "changelog", desc: "Activity history" },
      { name: "git-hook", desc: "Install/uninstall hooks" },
      { name: "tag", desc: "Session tags: start, resume, segment" },
    ],
  },
  {
    title: "Task & Remind",
    commands: [
      { name: "task add", desc: "Create work items linked to concepts" },
      { name: "task list", desc: "List tasks by status/priority" },
      { name: "task done", desc: "Complete tasks" },
      { name: "remind", desc: "Time-based triggers with actions" },
      { name: "watch add", desc: "Monitor flaky tests, unstable APIs" },
      { name: "watch resolve", desc: "Archive resolved watches" },
    ],
  },
];

export default function CommandsTabs() {
  const [active, setActive] = useState<"mcp" | "cli">("mcp");

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-card border border-border max-w-md mx-auto mb-8">
        <button
          onClick={() => setActive("mcp")}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            active === "mcp" ? "bg-primary text-white" : "text-secondary hover:text-foreground"
          }`}
        >
          MCP Tools
        </button>
        <button
          onClick={() => setActive("cli")}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            active === "cli" ? "bg-primary text-white" : "text-secondary hover:text-foreground"
          }`}
        >
          CLI Commands
        </button>
      </div>

      {active === "mcp" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mcpTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-start gap-3 p-4 rounded-md bg-card border border-border"
            >
              <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
              </svg>
              <div>
                <span className="text-sm font-mono font-medium text-foreground">{tool.name}</span>
                <p className="text-xs text-secondary mt-0.5">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {active === "cli" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cliGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                {group.title}
              </h4>
              <div className="space-y-2">
                {group.commands.map((cmd) => (
                  <div
                    key={cmd.name}
                    className="flex items-start gap-3 p-3 rounded-md bg-card border border-border"
                  >
                    <svg className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <div>
                      <span className="text-xs font-mono font-medium text-foreground">kin {cmd.name}</span>
                      <p className="text-xs text-secondary mt-0.5">{cmd.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
