import { AlertTriangle } from "lucide-react";

interface WarningBlockProps {
  title: string;
  children: React.ReactNode;
}

export const WarningBlock = ({ title, children }: WarningBlockProps) => {
  return (
    <div className="bg-warning/10 border border-warning/30 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{children}</p>
        </div>
      </div>
    </div>
  );
};
