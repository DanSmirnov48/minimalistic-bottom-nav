import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { NavItem } from "@/types";
import { LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-fit rounded-lg border-2 ">
      <div className="container p-0 flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav navItems={mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 p-2">
          <nav className="flex items-center space-x-2">
            <Link
              to={"/"}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "h-[35px]"
              )}
            >
              <LogIn className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
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
