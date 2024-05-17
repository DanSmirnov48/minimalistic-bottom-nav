import { SiteHeader } from "./components/site-header";
import { mainNav, optionsNavItems } from "./lib/config";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SiteHeader
        mainNav={mainNav}
        optionalNav={optionsNavItems}
        toolTipDelayDuration={0}
        align="bottom"
        className="bg-foreground/5"
      />
    </div>
  );
}
