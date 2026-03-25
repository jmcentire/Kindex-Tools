import { motion } from "framer-motion";

const tiers = [
  { name: "full", budget: "~4,000 tokens", use: "Session start, deep work", bar: 100 },
  { name: "abridged", budget: "~1,500 tokens", use: "Mid-session reference", bar: 37 },
  { name: "summarized", budget: "~750 tokens", use: "Quick orientation", bar: 19 },
  { name: "executive", budget: "~200 tokens", use: "Post-compaction re-injection", bar: 5 },
  { name: "index", budget: "~100 tokens", use: "Existence check only", bar: 2.5 },
];

export default function ContextTiers() {
  return (
    <div className="space-y-3">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-center gap-4 group"
        >
          <div className="w-24 shrink-0">
            <span className="text-sm font-mono font-medium text-foreground">{tier.name}</span>
          </div>
          <div className="flex-1 relative h-8 bg-dim/30 rounded-md overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tier.bar}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-primary/25 rounded-md"
            />
            <div className="relative z-10 flex items-center justify-between h-full px-3">
              <span className="text-xs text-secondary">{tier.use}</span>
              <span className="text-xs font-mono text-foreground/70">{tier.budget}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
