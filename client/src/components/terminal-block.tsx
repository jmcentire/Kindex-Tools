import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface TerminalLine {
  type: "prompt" | "output" | "comment" | "blank";
  text: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  title?: string;
  copyText?: string;
}

export function TerminalBlock({ lines, title, copyText }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = copyText || lines
      .filter((l) => l.type === "prompt")
      .map((l) => l.text.replace(/^\$\s*/, ""))
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div data-testid="terminal-block" className="relative group rounded-md border border-border bg-card">
      {title && (
        <div className="flex items-center justify-between gap-2 px-4 py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">{title}</span>
          </div>
          <button
            data-testid="button-copy-terminal"
            onClick={handleCopy}
            aria-label="Copy to clipboard"
            className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm p-0.5"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
      {!title && (
        <button
          data-testid="button-copy-terminal-inline"
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="absolute top-3 right-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm p-0.5"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      )}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
        {lines.map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-3" />;
          if (line.type === "comment")
            return (
              <div key={i} className="text-muted-foreground/60">
                {line.text}
              </div>
            );
          if (line.type === "prompt")
            return (
              <div key={i}>
                <span className="text-green-500 dark:text-green-400">$ </span>
                <span className="text-foreground">{line.text.replace(/^\$\s*/, "")}</span>
              </div>
            );
          return (
            <div key={i} className="text-muted-foreground">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
