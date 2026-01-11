import { ReactNode } from "react";

interface OnboardingSectionProps {
  children: ReactNode;
  id?: string;
}

export const OnboardingSection = ({ children, id }: OnboardingSectionProps) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
};
