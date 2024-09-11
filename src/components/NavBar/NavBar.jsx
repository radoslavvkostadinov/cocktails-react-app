import logo from '../../logo/logo.png'; // Correct relative path
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from '../ui/button';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <header className="flex bg-white drop-shadow-md justify-between items-center h-16 px-4 md:px-6 lg:px-10 xl:px-16">
            <a href="/">
                <img
                    src={logo}
                    style={{ width: '280px', height: '280px' }}
                    alt="logo"
                />
            </a>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/categories">
                            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/random">
                            <NavigationMenuTrigger>Surprise me</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/about">
                            <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                <Button className="rounded-full mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </Button>
                <Button className="rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </Button>
            </div>
        </header>
    )
}
