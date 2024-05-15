import { SetStateAction, useState } from "react";
import { MainNav } from "./components/main-nav"
import { cn } from "./lib/utils";
import { Icons } from "./components/icons";
import { NavItem } from "./types";
import { ChevronLeftIcon } from "lucide-react";

export default function Home() {
  const [activeLink, setActiveLink] = useState(mainNav[0].title);

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="flex items-center justify-center h-screen pt-28">
      {/* <MainNav />s */}

      <ul className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-lg border-2 overflow-hidden">
        {mainNav.map((item, index) => {
          const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;
          return item.to ? (
            <li
              className={cn("list-none w-[45px]", activeLink === item.title && 'active')}
              onClick={() => handleLinkClick(item.title)}
            >
              <a className="block py-3.5 px-2 text-center transition-all duration-500 no-underline" href="#">
                <Icon className="w-5 h-5 m-auto text-muted-foreground" />
              </a>
            </li>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              {item.title}
            </span>
          );
        })}
        <li className="slide"></li>
      </ul>
    </div>
  )
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
