import { cn } from "@/lib/utils"
import { NavItem } from "@/types";
import { NavLink } from 'react-router-dom';
import { ChevronLeftIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export function MainNav() {
  return (
    <header className="bg-background sticky top-0 z-40 w-fit rounded-lg">
      <div className="container p-1 flex h-12 items-center space-x-4 sm:justify-center sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <nav className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-lg border-2 overflow-hidden">
            {mainNav.map((item, index) => {
              const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;
              return item.to ? (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "slide-effect list-none w-[45px] block py-3.5 px-2 text-center transition-all duration-500 no-underline text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                      isActive && "active"
                      // isActive && "active animate-pulse duration-2000 ease-linear text-[#262626] delay-500"
                    )
                  }
                >
                  <Icon className="h-5 w-5 m-auto" aria-hidden="true" />
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
            <div className="slide"></div>
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
