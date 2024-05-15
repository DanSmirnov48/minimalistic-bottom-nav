import { cn } from "@/lib/utils"
import { NavItem } from "@/types";
import { NavLink } from 'react-router-dom';
import { ChevronLeftIcon } from "lucide-react";
import { Icons } from "@/components/icons";

interface MainNavProps {
  navItems: NavItem[];
}

export function MainNav({ navItems }: MainNavProps) {
  return (
    <div className="flex overflow-hidden">
      {navItems.map((item, index) => {
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
    </div>
  );
}