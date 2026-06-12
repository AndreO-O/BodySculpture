import {
  Activity,
  Waves,
  Hand,
  Sparkles,
  Flower2,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  Waves,
  Hand,
  Sparkles,
  Flower2,
  Zap,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
