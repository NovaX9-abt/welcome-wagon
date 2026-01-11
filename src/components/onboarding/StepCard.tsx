import { ReactNode } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  children: ReactNode;
  imagePlaceholder?: string;
}

export const StepCard = ({ stepNumber, title, children, imagePlaceholder }: StepCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">{stepNumber}</span>
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          <div className="text-muted-foreground leading-relaxed">{children}</div>
          
          {imagePlaceholder && (
            <div className="mt-4 bg-muted rounded-lg border border-border overflow-hidden">
              <div className="aspect-video flex items-center justify-center p-8">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-secondary/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{imagePlaceholder}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
