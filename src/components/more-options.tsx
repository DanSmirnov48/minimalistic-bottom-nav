import { Ellipsis } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import { Icons } from './icons';
import { OptionalNavItem } from '@/types';

interface MainNavProps {
    navItems: OptionalNavItem[]
}

export default function MoreOptionsDialog({ navItems }: MainNavProps) {
    return (
        <DropdownMenu>
            <Tooltip>
                <DropdownMenuTrigger asChild>
                    <TooltipTrigger asChild>
                        <Ellipsis />
                    </TooltipTrigger>
                </DropdownMenuTrigger>
                <TooltipContent className='mb-3.5'>
                    <p>Show more</p>
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent side='top' className="w-44 mb-5" align="center" forceMount>
                <DropdownMenuGroup>
                    {navItems.map((item, index) => {
                        const Icon = item.icon ? Icons[item.icon] : Icons.url;
                        return (
                            <DropdownMenuItem asChild key={index}>
                                <Link to={item.to} className='cursor-pointer text-muted-foreground'>
                                    {item.title}
                                    <Icon className="ml-2 h-3 w-3" />
                                </Link>
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}