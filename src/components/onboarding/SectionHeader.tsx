interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};
