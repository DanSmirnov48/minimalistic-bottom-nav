import { SetStateAction, useState } from "react";
import { MainNav } from "./components/main-nav"
import { cn } from "./lib/utils";
import { Icons } from "./components/icons";

export default function Home() {
  const [activeLink, setActiveLink] = useState('link1');

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="flex items-center justify-center h-screen pt-28">
      <MainNav />

      <ul className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-lg border-2 overflow-hidden">
        <li
          className={cn("list-none w-[45px]", activeLink === 'link1' && 'active')}
          onClick={() => handleLinkClick('link1')}
        >
          <a className="block py-3.5 px-2 text-center transition-all duration-500 no-underline" href="#">
            <Icons.home className="w-5 h-5 m-auto text-muted-foreground" />
          </a>
        </li>
        <li
          className={cn("list-none w-[45px]", activeLink === 'link2' && 'active')}
          onClick={() => handleLinkClick('link2')}
        >
          <a className="block py-3.5 px-2 text-center transition-all duration-500 no-underline" href="#">
            <Icons.about className="w-5 h-5 m-auto text-muted-foreground" />
          </a>
        </li>
        <li
          className={cn("list-none w-[45px]", activeLink === 'link3' && 'active')}
          onClick={() => handleLinkClick('link3')}
        >
          <a className="block py-3.5 px-2 text-center transition-all duration-500 no-underline" href="#">
            <Icons.mail className="w-5 h-5 m-auto text-muted-foreground" />
          </a>
        </li>
        <li className="slide"></li>
      </ul>
    </div>
  )
}