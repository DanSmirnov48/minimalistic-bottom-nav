import * as React from "react";
import { Square } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ThemeToggle({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className={className} {...props}>
          <Button
            variant='ghost'
            size='icon'
            className="hover:bg-transparent"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Square className='w-6 h-6 fill-black dark:hidden' />
            <Square className='w-6 h-6 fill-white hidden dark:block' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent className="mb-1.5">
        <p>Switch theme</p>
      </TooltipContent>
    </Tooltip>
  );
}