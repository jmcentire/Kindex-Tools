import { useState } from "react";

interface TerminalLine {
  type: "prompt" | "output" | "comment" | "blank";
  text: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  title?: string;
  copyText?: string;
}

export default function TerminalBlock({ lines, title, copyText }: TerminalBlockProps) {
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
    <div className="relative group rounded-lg border border-border bg-card">
      {title && (
        <div className="flex items-center justify-between gap-2 px-4 py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs font-mono text-muted ml-2">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            aria-label="Copy to clipboard"
            className="text-muted opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-0.5"
          >
            {copied ? (
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            )}
          </button>
        </div>
      )}
      {!title && (
        <button
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="absolute top-3 right-3 text-muted opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-0.5"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          )}
        </button>
      )}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
        {lines.map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-3" />;
          if (line.type === "comment")
            return (
              <div key={i} className="text-muted/60">
                {line.text}
              </div>
            );
          if (line.type === "prompt")
            return (
              <div key={i}>
                <span className="text-green-400">$ </span>
                <span className="text-foreground">{line.text.replace(/^\$\s*/, "")}</span>
              </div>
            );
          return (
            <div key={i} className="text-secondary">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
