import React from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Icons } from "@/components/icons";
import { ChevronLeftIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface MainNavProps {
  navItems: NavItem[];
}

export function MainNav({ navItems }: MainNavProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const location = useLocation();

  return (
    <div className="relative flex overflow-hidden">
      {navItems.map((item, index) => {
        const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;
        const isActive = location.pathname === item.to;

        if (isActive && activeIndex !== index) {
          setActiveIndex(index);
        }

        return item.to ? (
          <Tooltip key={index}>
            <TooltipTrigger>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  if (isActive && activeIndex !== index) {
                    setActiveIndex(index);
                  }
                  return cn(
                    'list-none w-[45px] block py-3.5 px-2 text-center transition-all duration-500 no-underline text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                    isActive && 'active'
                  );
                }}
              >
                <Icon className="h-5 w-5 m-auto" aria-hidden="true" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent className="mb-0.5">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        );
      })}
      <div
        className="slide"
        style={{
          left: activeIndex !== null ? `${activeIndex * 45}px` : '0',
          opacity: activeIndex !== null ? 1 : 0,
        }}
      ></div>
    </div>
  );
}