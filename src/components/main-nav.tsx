import { cn } from "@/lib/utils"
import { NavItem } from "@/types";
import { NavLink } from 'react-router-dom';
import { ChevronLeftIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export function MainNav() {
  return (
    <header className="bg-background sticky top-0 z-40 w-fit border-2 rounded-lg">
      <div className="container p-1 flex h-12 items-center space-x-4 sm:justify-center sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <nav className="flex gap-2">
            {mainNav.map((item, index) => {
              const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;
              return item.to ? (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center text-sm font-medium text-muted-foreground p-2",
                      item.disabled && "cursor-not-allowed opacity-80",
                      isActive && "bg-foreground/10 rounded-md"
                    )
                  }
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {/* <span>{item.title}</span> */}
                </NavLink>
              ) : (
                <span
                  key={index}
                  className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                >
                  {item.title}
                </span>
              );
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
