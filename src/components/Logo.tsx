
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/26c2f10d-ef43-4d0f-917e-8a926caa8383.png" 
        alt="Rehabkliniken" 
        className="h-9 md:h-10"
      />
    </div>
  );
};

export default Logo;
