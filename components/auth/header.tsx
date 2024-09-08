import { cn } from "@/lib/utils"
import Logo from "../logo";

interface HeaderLabel {
  label: string;
};

export const Header = ({
  label
}: HeaderLabel) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold"
      )}>
        <Logo />
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
}