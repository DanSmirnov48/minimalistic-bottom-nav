import { cn } from "@/lib/utils"
import { NavItem } from "@/types";
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export function MainNav() {
  return (
    <header className="bg-background sticky top-0 z-40 w-fit border-2 rounded-lg">
      <div className="container flex h-14 items-center space-x-4 sm:justify-center sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <nav className="flex gap-6">
            {mainNav.map((item, index) => {
              const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;

              return item.to ? (
                <Link
                  key={index}
                  to={item.to}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <span
                  key={index}
                  className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                >
                  {item.title}
                </span>
              )
            })}
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
  }
]
