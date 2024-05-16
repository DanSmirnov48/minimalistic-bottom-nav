import { MainNav } from "@/components/main-nav";
import { NavItem } from "@/types";
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "./theme-toggle";
import { TooltipProvider } from "./ui/tooltip";
import MoreOptionsDialog from "./more-options";

export function SiteHeader() {
  return (
    <TooltipProvider delayDuration={0}>
      <header className="bg-background sticky top-0 z-40 w-fit rounded-xl border-2">
        <div className="container p-0 flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav navItems={mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4 pr-1">
            <Separator orientation="vertical" decorative className="h-9 w-[0.07rem] rounded-full" />
            <nav className="flex items-center space-x-2">
              <MoreOptionsDialog />
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}

const mainNav: NavItem[] = [
  {
    title: "Home",
    to: "/",
    icon: "home",
  },
  {
    title: "About",
    to: "/about",
    icon: "about",
  },
  {
    title: "Contant",
    to: "/contact",
    icon: "mail",
  },
];
