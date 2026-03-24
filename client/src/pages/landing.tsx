import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Layers,
  Shield,
  Users,
  Zap,
  Terminal,
  Search,
  GitBranch,
  Database,
  Clock,
  ArrowRight,
  BookOpen,
  Boxes,
  Target,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Bookmark,
  Bell,
  CheckSquare,
  Eye,
  Palette,
  Lock,
  Microscope,
  Globe,
} from "lucide-react";
import { SiGithub, SiPython } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TerminalBlock } from "@/components/terminal-block";
import { Navigation } from "@/components/navigation";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-mono" data-testid="badge-version">
              v0.12.0
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs" data-testid="badge-tests">
              930+ tests passing
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs" data-testid="badge-license">
              MIT License
            </Badge>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          data-testid="text-hero-title"
        >
          The memory layer{" "}
          <span className="gradient-text">Claude Code</span>{" "}
          doesn't have.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          data-testid="text-hero-tagline"
        >
          A persistent knowledge graph for AI-assisted workflows. Your AI never starts a session blind.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10"
          data-testid="text-hero-sub"
        >
          Memory plugins capture what happened. Kindex captures what it means and how it connects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a href="#install">
            <Button size="lg" data-testid="button-get-started">
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <a href="https://github.com/jmcentire/kindex" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" data-testid="button-view-github">
              <SiGithub className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <TerminalBlock
            title="Terminal"
            lines={[
              { type: "prompt", text: "$ pip install kindex[mcp]" },
              { type: "prompt", text: "$ claude mcp add --scope user --transport stdio kindex -- kin-mcp" },
              { type: "prompt", text: "$ kin init" },
              { type: "blank", text: "" },
              { type: "output", text: "Kindex initialized. 37 MCP tools available." },
            ]}
            copyText="pip install kindex[mcp]
claude mcp add --scope user --transport stdio kindex -- kin-mcp
kin init"
          />
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Brain,
    title: "Knowledge Graph",
    description: "Not a log file. Nodes with types, weights, domains. Edges with provenance and decay. The graph understands what matters.",
    accent: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Layers,
    title: "5 Context Tiers",
    description: "From 100 to 4000 tokens. Auto-selects the right depth based on your available token budget. Never eats your context window.",
    accent: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: Shield,
    title: "Operational Guardrails",
    description: "Constraints block deploys. Directives encode preferences. Watches flag attention items. Checkpoints run pre-flight.",
    accent: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Users,
    title: "Team & Org Ready",
    description: ".kin inheritance chains from service to platform to org. Private/team/org/public scoping with PII stripping on export.",
    accent: "text-green-500 dark:text-green-400",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    description: "Hybrid FTS5 + graph traversal. 192 nodes, 11,802 edges searched in 142ms. Built on SQLite for zero-config speed.",
    accent: "text-yellow-500 dark:text-yellow-400",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Auto-capture knowledge on commits. Git hooks install with one command. Your codebase history becomes searchable context.",
    accent: "text-pink-500 dark:text-pink-400",
  },
  {
    icon: Clock,
    title: "Cache-Optimized LLM",
    description: "Three-tier prompt architecture with Anthropic prompt caching. Stable knowledge cached at 10% cost. Only the question pays full price.",
    accent: "text-cyan-500 dark:text-cyan-400",
  },
  {
    icon: Bookmark,
    title: "Session Tags",
    description: "Named work context handles that replace resume files. Track focus, remaining items, and topic segments. Resume seamlessly in new sessions.",
    accent: "text-indigo-500 dark:text-indigo-400",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Actionable work items linked to graph concepts. Tasks surface contextually via graph proximity. Priority, status, and completion tracking built in.",
    accent: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: Bell,
    title: "Reminders",
    description: "Time-based triggers with shell commands or Claude instructions. Natural language scheduling. Snooze, execute, or complete. Fires at session start.",
    accent: "text-red-500 dark:text-red-400",
  },
  {
    icon: Eye,
    title: "Watches",
    description: "Ongoing attention flags for flaky tests, unstable APIs, tech debt. Set owner and expiry. Watches surface in every session's context automatically.",
    accent: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Palette,
    title: "Conversation Modes",
    description: "Research-backed priming artifacts that induce processing modes in AI sessions. Five built-in modes. Create custom modes from sessions and export for team sharing.",
    accent: "text-pink-500 dark:text-pink-400",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-features">
            Core Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-features-title">
            Everything your AI assistant needs to remember
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A weighted knowledge graph that grows intelligence over time &mdash; understanding relationships, surfacing constraints, and managing context injection.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <Card className="p-6 h-full border-border bg-card hover-elevate" data-testid={`card-feature-${i}`}>
                <feature.icon className={`w-6 h-6 mb-4 ${feature.accent}`} />
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function PolicyGovernedSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-yellow-500/5 dark:bg-yellow-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-policy">
              Security
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-policy-title">
              Your knowledge graph is protected
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              signet-eval gates every tool call with deterministic policy enforcement. Define rules for what your AI can and can't do with your knowledge.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-6">
              signet-eval evaluates in ~2&micro;s. Zero runtime overhead.
            </p>
            <a
              href="https://signet.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c9a227] hover:text-[#d4af37] transition-colors"
              data-testid="link-signet-policy"
            >
              Learn more at signet.tools <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <TerminalBlock
              title="policy.yaml"
              lines={[
                { type: "output", text: "rules:" },
                { type: "output", text: "  - name: protect-knowledge-graph" },
                { type: "output", text: "    action: confirm" },
                { type: "output", text: "    conditions:" },
                { type: "output", text: "      - type: tool_name" },
                { type: "output", text: "        values: [Bash, Write]" },
                { type: "output", text: '    message: "Modifying files requires confirmation"' },
                { type: "blank", text: "" },
                { type: "output", text: "  - name: allow-kindex-tools" },
                { type: "output", text: "    action: allow" },
                { type: "output", text: "    conditions:" },
                { type: "output", text: "      - type: mcp_server" },
                { type: "output", text: "        values: [kindex]" },
              ]}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContextTiersSection() {
  const tiers = [
    { name: "full", budget: "~4,000 tokens", use: "Session start, deep work", bar: 100 },
    { name: "abridged", budget: "~1,500 tokens", use: "Mid-session reference", bar: 37 },
    { name: "summarized", budget: "~750 tokens", use: "Quick orientation", bar: 19 },
    { name: "executive", budget: "~200 tokens", use: "Post-compaction re-injection", bar: 5 },
    { name: "index", budget: "~100 tokens", use: "Existence check only", bar: 2.5 },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-context">
              Smart Context
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-context-title">
              Five tiers of context, zero wasted tokens
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              When other plugins dump everything into context, Kindex auto-selects the right depth. 200 tokens of executive summary or 4,000 tokens of deep context &mdash; whatever fits.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Your plugin doesn't eat the context window. It adapts to it.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-3">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 group"
                  data-testid={`tier-${tier.name}`}
                >
                  <div className="w-24 shrink-0">
                    <span className="text-sm font-mono font-medium">{tier.name}</span>
                  </div>
                  <div className="flex-1 relative h-8 bg-muted/50 rounded-md overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tier.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-primary/20 dark:bg-primary/30 rounded-md"
                    />
                    <div className="relative z-10 flex items-center justify-between h-full px-3">
                      <span className="text-xs text-muted-foreground">{tier.use}</span>
                      <span className="text-xs font-mono text-foreground/70">{tier.budget}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-difference">
            The Difference
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-comparison-title">
            Graph intelligence, not session archives
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <Card className="p-6 border-border bg-card h-full" data-testid="card-comparison-others">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-muted-foreground">Other Memory Plugins</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Session archives with keyword search",
                  "Flat text storage, no relationships",
                  "Dumps everything into context window",
                  "No concept of importance or decay",
                  "Single-user, single-project only",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-muted-foreground/40 mt-0.5">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="p-6 border-primary/20 bg-card glow-blue-sm h-full" data-testid="card-comparison-kindex">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Kindex</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Weighted knowledge graph with typed nodes and edges",
                  "Relationships, provenance, and edge decay over time",
                  "5 context tiers that adapt to your token budget",
                  "Weights, domains, and audiences prioritize what matters",
                  "Team/org inheritance with privacy scoping",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    icon: BookOpen,
    title: "Creative Writing",
    description:
      "Ingested a 162-file fantasy novel vault — characters, locations, magic systems, plot outlines — in one pass. Cross-referenced by content mentions. Searched in milliseconds.",
    terminal: [
      { type: "prompt" as const, text: "$ kin status" },
      { type: "output" as const, text: "Nodes:     192" },
      { type: "output" as const, text: "Edges:     11,802" },
      { type: "output" as const, text: "Orphans:   3" },
      { type: "blank" as const, text: "" },
      { type: "prompt" as const, text: '$ kin search "the Baker"' },
      { type: "output" as const, text: "# 10 results for \"the Baker\"" },
      { type: "output" as const, text: "" },
      { type: "output" as const, text: "[document] The Baker - Hessa's Profile (w=0.70)" },
      { type: "output" as const, text: "  > Thieves Guild, Five Marks" },
      { type: "blank" as const, text: "" },
      { type: "output" as const, text: "0.142s total" },
    ],
  },
  {
    icon: Boxes,
    title: "Multi-Repo Engineering",
    description:
      "Link knowledge across repositories with .kin inheritance chains. A service repo inherits from platform context, which inherits from org-wide standards. Every Claude session knows the full stack.",
    terminal: [
      { type: "comment" as const, text: "# Service inherits from platform and org" },
      { type: "prompt" as const, text: "$ cat .kin" },
      { type: "output" as const, text: "inherit:" },
      { type: "output" as const, text: "  - ../platform/.kin" },
      { type: "output" as const, text: "  - ~/.config/kindex/org.kin" },
      { type: "blank" as const, text: "" },
      { type: "prompt" as const, text: '$ kin context --budget 1500' },
      { type: "output" as const, text: "[abridged] 1,487 tokens injected" },
      { type: "output" as const, text: "  3 constraints, 2 directives, 1 watch" },
    ],
  },
  {
    icon: Target,
    title: "Research & Analysis",
    description:
      "Track research papers, API documentation, competitive analysis. Kindex maintains weighted connections between concepts so you can ask questions that span your entire knowledge base.",
    terminal: [
      { type: "prompt" as const, text: '$ kin ask "What are the tradeoffs between RAG and fine-tuning?"' },
      { type: "output" as const, text: "Based on 4 connected nodes:" },
      { type: "blank" as const, text: "" },
      { type: "output" as const, text: "RAG offers real-time knowledge with higher latency." },
      { type: "output" as const, text: "Fine-tuning bakes knowledge in but goes stale." },
      { type: "output" as const, text: "" },
      { type: "output" as const, text: "Related: [constraint] Always cite sources" },
    ],
  },
];

function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-green-500/5 dark:bg-green-500/8 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-use-cases">
            Real World
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-use-cases-title">
            Built for serious work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From novel writing to multi-service architectures, Kindex scales to your knowledge.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.title} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <uc.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold" data-testid={`text-usecase-title-${i}`}>{uc.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <TerminalBlock lines={uc.terminal} title={uc.title} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackIntegrationSection() {
  const integrations = [
    {
      icon: Shield,
      name: "Sentinel",
      description: "Fixer agents query Kindex for prior incident patterns before attempting remediation",
    },
    {
      icon: Target,
      name: "Pact",
      description: "Code generation agents query for architectural decisions and constraints",
    },
    {
      icon: BookOpen,
      name: "Chronicler",
      description: "Records operational events as queryable knowledge that enriches future sessions",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-stack">
            Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-stack-title">
            The shared memory of your entire agent ecosystem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Kindex isn't just for you. Every agent in the Exemplar stack queries the same knowledge graph.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {integrations.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1}>
              <Card className="p-6 h-full border-border bg-card hover-elevate" data-testid={`card-integration-${item.name.toLowerCase()}`}>
                <item.icon className="w-6 h-6 mb-4 text-emerald-500 dark:text-emerald-400" />
                <h3 className="text-base font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center">
          <a
            href="https://exemplar.tools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            data-testid="link-exemplar-stack"
          >
            See the full 18-project stack <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function InstallSection() {
  return (
    <section id="install" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-install">
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-install-title">
            Three ways to install
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Choose your preferred integration. Zero configuration required.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Tabs defaultValue="claude-plugin" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6" data-testid="tabs-install">
              <TabsTrigger value="claude-plugin" data-testid="tab-claude-plugin">Claude Code Plugin</TabsTrigger>
              <TabsTrigger value="mcp-json" data-testid="tab-mcp-json">MCP Config</TabsTrigger>
              <TabsTrigger value="cli" data-testid="tab-cli">CLI Only</TabsTrigger>
            </TabsList>

            <TabsContent value="claude-plugin">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
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
            </TabsContent>

            <TabsContent value="mcp-json">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Add to any repo's <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">.mcp.json</code> for project-scoped access.
                </p>
                <TerminalBlock
                  title=".mcp.json"
                  lines={[
                    { type: "output", text: '{' },
                    { type: "output", text: '  "mcpServers": {' },
                    { type: "output", text: '    "kindex": {' },
                    { type: "output", text: '      "command": "kin-mcp"' },
                    { type: "output", text: '    }' },
                    { type: "output", text: '  }' },
                    { type: "output", text: '}' },
                  ]}
                  copyText='{"mcpServers":{"kindex":{"command":"kin-mcp"}}}'
                />
              </div>
            </TabsContent>

            <TabsContent value="cli">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
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
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CommandsSection() {
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
    { name: "mode_activate", desc: "Activate a conversation mode — returns priming artifact" },
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

  return (
    <section id="commands" className="py-24 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-commands">
            Tools & Commands
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-commands-title">
            37 MCP tools. 49 CLI commands.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Comprehensive control over your knowledge graph, from both AI-assisted and manual workflows.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Tabs defaultValue="mcp" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8" data-testid="tabs-commands">
              <TabsTrigger value="mcp" data-testid="tab-mcp-tools">MCP Tools</TabsTrigger>
              <TabsTrigger value="cli" data-testid="tab-cli-commands">CLI Commands</TabsTrigger>
            </TabsList>

            <TabsContent value="mcp">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mcpTools.map((tool, i) => (
                  <div
                    key={tool.name}
                    className="flex items-start gap-3 p-4 rounded-md bg-card border border-border"
                    data-testid={`mcp-tool-${tool.name}`}
                  >
                    <Terminal className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-mono font-medium">{tool.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cli">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cliGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {group.title}
                    </h4>
                    <div className="space-y-2">
                      {group.commands.map((cmd) => (
                        <div
                          key={cmd.name}
                          className="flex items-start gap-3 p-3 rounded-md bg-card border border-border"
                          data-testid={`cli-cmd-${cmd.name.replace(/\s/g, "-")}`}
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-mono font-medium">kin {cmd.name}</span>
                            <p className="text-xs text-muted-foreground mt-0.5">{cmd.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="py-24 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-architecture">
            Under the Hood
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-arch-title">
            Simple architecture, powerful results
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card className="p-5 border-border bg-card" data-testid="card-arch-storage">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">SQLite-Backed Graph</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zero-config storage with FTS5 full-text search. Your knowledge lives in a single portable file at <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">~/.kindex</code>.
                </p>
              </Card>

              <Card className="p-5 border-border bg-card" data-testid="card-arch-graph">
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Typed Nodes & Edges</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nodes carry type, weight (0.0-1.0), domain tags, and audience scope. Edges track provenance and naturally decay, keeping your graph fresh.
                </p>
              </Card>

              <Card className="p-5 border-border bg-card" data-testid="card-arch-context">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Context Engine</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hybrid BFS + FTS5 traversal assembles context from graph relationships. Five tiers auto-select based on available token budget for optimal context injection.
                </p>
              </Card>

              <Card className="p-5 border-border bg-card" data-testid="card-arch-cache">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Three-Tier LLM Cache</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Codebook (stable node index) and query-relevant context are cached via Anthropic prompt caching at 10% cost. Graph edges predict which nodes to pre-cache per topic.
                </p>
              </Card>
            </div>

            <div>
              <TerminalBlock
                title="Graph Stats"
                lines={[
                  { type: "prompt", text: "$ kin graph stats" },
                  { type: "blank", text: "" },
                  { type: "output", text: "Nodes:      192" },
                  { type: "output", text: "Edges:      11,802" },
                  { type: "output", text: "Density:    0.3218" },
                  { type: "output", text: "Components: 5" },
                  { type: "output", text: "Avg degree: 122.94" },
                  { type: "blank", text: "" },
                  { type: "output", text: "Node types:" },
                  { type: "output", text: "  document:   78  (40.6%)" },
                  { type: "output", text: "  person:     42  (21.9%)" },
                  { type: "output", text: "  concept:    31  (16.1%)" },
                  { type: "output", text: "  constraint: 18  ( 9.4%)" },
                  { type: "output", text: "  directive:  14  ( 7.3%)" },
                  { type: "output", text: "  other:       9  ( 4.7%)" },
                  { type: "blank", text: "" },
                  { type: "output", text: "Weight distribution:" },
                  { type: "output", text: "  0.9-1.0  ████████ 23" },
                  { type: "output", text: "  0.7-0.9  ████████████████ 54" },
                  { type: "output", text: "  0.5-0.7  ████████████████████ 68" },
                  { type: "output", text: "  0.3-0.5  ████████████ 34" },
                  { type: "output", text: "  0.0-0.3  ████ 13" },
                ]}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ResearchFoundationSection() {
  const papers = [
    {
      title: "Structural Compression Theory",
      description: "The monograph establishing the theoretical foundation for knowledge graph compression and context tiering.",
      href: "https://perardua.dev/books",
      icon: BookOpen,
    },
    {
      title: "Ambient Structure Discovery",
      description: "Stigmergy-based pattern discovery — how agents find and reinforce structural patterns in knowledge without central coordination.",
      href: "https://perardua.dev/research/ot-5",
      icon: Microscope,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs font-mono" data-testid="badge-research">
            Research
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-research-title">
            Built on peer-reviewed foundations
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {papers.map((paper, i) => (
            <AnimatedSection key={paper.title} delay={i * 0.1}>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-testid={`card-paper-${i}`}
              >
                <Card className="p-6 h-full border-border bg-card hover-elevate transition-colors group-hover:border-indigo-500/30">
                  <paper.icon className="w-6 h-6 mb-4 text-indigo-500 dark:text-indigo-400" />
                  <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {paper.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 group-hover:text-primary transition-colors">
                    Read on perardua.dev <ExternalLink className="w-3 h-3" />
                  </span>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center">
          <a
            href="https://perardua.dev/research"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            data-testid="link-all-papers"
          >
            Read all 40 papers <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PartOfSomethingBiggerSection() {
  return (
    <section className="py-24 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-bigger-title">
            Part of something bigger
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <a
              href="https://exemplar.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-testid="card-exemplar"
            >
              <Card className="p-6 h-full border-emerald-500/20 bg-card hover-elevate transition-colors group-hover:border-emerald-500/40">
                <Globe className="w-6 h-6 mb-4 text-emerald-500 dark:text-emerald-400" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                  exemplar.tools
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Kindex is the intelligence layer of the Exemplar stack &mdash; the shared memory that every agent reads and writes.
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 group-hover:text-emerald-500 transition-colors">
                  Explore the stack <ExternalLink className="w-3 h-3" />
                </span>
              </Card>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <a
              href="https://signet.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-testid="card-signet"
            >
              <Card className="p-6 h-full border-[#c9a227]/20 bg-card hover-elevate transition-colors group-hover:border-[#c9a227]/40">
                <Lock className="w-6 h-6 mb-4 text-[#c9a227]" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#c9a227] transition-colors">
                  signet.tools
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Your knowledge is cryptographically protected. Policy enforcement, credential management, and audit trails for every tool call.
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 group-hover:text-[#c9a227] transition-colors">
                  Learn about Signet <ExternalLink className="w-3 h-3" />
                </span>
              </Card>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
            Ready to give your AI a memory?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Install in under a minute. Free, open source, MIT licensed. Your knowledge stays local.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#install">
              <Button size="lg" data-testid="button-cta-install">
                Install Kindex
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="https://github.com/jmcentire/kindex" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" data-testid="button-cta-github">
                <SiGithub className="w-4 h-4 mr-2" />
                Star on GitHub
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs font-mono">K</span>
              </div>
              <span className="text-base font-bold tracking-tight">Kindex</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The persistent knowledge graph for AI-assisted workflows.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a></li>
              <li><a href="#install" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Install</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/jmcentire/kindex" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://pypi.org/project/kindex/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  PyPI <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://jmcentire.github.io/kindex/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Sites</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://exemplar.tools" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  exemplar.tools <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://signet.tools" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#c9a227] transition-colors inline-flex items-center gap-1">
                  signet.tools <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-sm text-foreground">kindex.tools</span>
              </li>
              <li>
                <a href="https://perardua.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  perardua.dev <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            MIT License. Built by <a href="https://github.com/jmcentire" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">jmcentire</a>.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground/60">Part of the <a href="https://exemplar.tools" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Exemplar</a> stack</span>
            <div className="flex items-center gap-2">
              <SiPython className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Python 3.10+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesSection />
      <PolicyGovernedSection />
      <ContextTiersSection />
      <ComparisonSection />
      <UseCasesSection />
      <StackIntegrationSection />
      <InstallSection />
      <CommandsSection />
      <ArchitectureSection />
      <ResearchFoundationSection />
      <PartOfSomethingBiggerSection />
      <CTASection />
      <Footer />
    </div>
  );
}
