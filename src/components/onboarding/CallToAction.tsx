import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CallToActionProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

export const CallToAction = ({ text, buttonText, buttonLink }: CallToActionProps) => {
  return (
    <div className="bg-accent rounded-2xl p-8 md:p-10 text-center">
      <p className="text-xl font-semibold text-accent-foreground mb-6">{text}</p>
      <Button asChild size="lg" className="font-semibold">
        <a href={buttonLink}>
          <Calendar className="w-5 h-5 mr-2" />
          {buttonText}
        </a>
      </Button>
    </div>
  );
};
