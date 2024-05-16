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

const MoreOptionsDialog = () => {
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
                    <DropdownMenuItem asChild>
                        <Link to="/">
                            Link 1
                            <Icons.url className="ml-2 h-3 w-3 text-muted-foreground" />
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="/">
                            Link 2
                            <Icons.url className="ml-2 h-3 w-3 text-muted-foreground" />
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="/">
                            Link 3
                            <Icons.url className="ml-2 h-3 w-3 text-muted-foreground" />
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="/">
                            Link 4
                            <Icons.url className="ml-2 h-3 w-3 text-muted-foreground" />
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MoreOptionsDialog