import { MainNav } from "@/components/main-nav";
import { NavItem, OptionalNavItem } from "@/types";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { TooltipProvider } from "./ui/tooltip";
import MoreOptionsDialog from "./more-options";
import { cn } from "@/lib/utils";

interface SiteHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  mainNav: NavItem[];
  optionalNav?: OptionalNavItem[];
  toolTipDelayDuration?: number;
  align?: 'top' | 'bottom';
}

export function SiteHeader({
  mainNav,
  optionalNav,
  toolTipDelayDuration = 100,
  align = 'top',
  className,
  ...props
}: SiteHeaderProps) {
  return (
    <TooltipProvider delayDuration={toolTipDelayDuration}>
      <header className={cn("bg-background sticky z-40 w-fit rounded-xl border-2", className)} {...props}>
        <div className="container p-0 flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav navItems={mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4 pr-1">
            <Separator orientation="vertical" decorative className="h-9 w-[0.07rem] rounded-full" />
            <nav className="flex items-center space-x-2">
              {optionalNav && <MoreOptionsDialog navItems={optionalNav} />}
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}