interface SuccessMessageProps {
  children: React.ReactNode;
}

export const SuccessMessage = ({ children }: SuccessMessageProps) => {
  return (
    <div className="bg-accent border border-primary/20 rounded-xl p-6 text-center">
      <p className="text-lg font-medium text-accent-foreground">{children}</p>
    </div>
  );
};
