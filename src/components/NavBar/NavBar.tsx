import logo from '../../images/logo.png';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../../components/ui/navigation-menu"
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';


export default function NavBar() {

    const [showComponent, setShowComponent] = useState(false);
    const handleClick = () => {
        setShowComponent(!showComponent);

    };

    return (
        <header className="z-50 flex bg-white drop-shadow-md justify-between items-center h-16 px-4 md:px-6 lg:px-10 xl:px-16 md:flex sticky top-0 z-10">
            <span className='2xl:hidden xl:hidden lg:hidden'>
                <Button
                    size='sm'
                    variant='ghost'
                    className="text-indigo-950 rounded-full bg-gray-200"
                    onClick={handleClick}
                >
                    ☰
                </Button>
                {showComponent && (
                    <div className='absolute top-16 left-0 w-60 bg-white shadow-md flex flex-col items-start p-4 rounded-md'>
                        <Link to="/" className="text-xl hover:text-orange-400 duration-500 mb-2 ml-2" onClick={handleClick}>Home</Link>
                        <Link to="/categories" className="text-xl hover:text-orange-400 duration-500 mb-2 ml-2" onClick={handleClick}>Categories</Link>
                        <Link to="/random" className="text-xl hover:text-orange-400 duration-500 mb-2 ml-2" onClick={handleClick}>Surprise me</Link>
                        <Link to="/non-alcoholic" className="text-xl hover:text-orange-400 duration-500 mb-2 ml-2" onClick={handleClick}>Non-alcoholic</Link>
                        <Link to="/about" className="text-xl hover:text-orange-400 duration-500 mb-2 ml-2" onClick={handleClick}>About us</Link>

                    </div>
                )}
            </span>
            {!showComponent && (<a href="/" className='relative z-0'>
                <img
                    src={logo}
                    className='relative z-0 sm:w-64 sm:h-64 sm:ml-24 md:w-64 md:h-60 md:ml-32 lg:ml-0'
                    alt="Logo"
                />
            </a>)}
            <NavigationMenu>
                <NavigationMenuList className="hidden lg:flex">
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuTrigger className="text-indigo-950 hover:text-orange-400 duration-500">Home</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/categories">
                            <NavigationMenuTrigger className="text-indigo-950 hover:text-orange-400 duration-500">Categories</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/random">
                            <NavigationMenuTrigger className="text-indigo-950 hover:text-orange-400 duration-500">Surprise me</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/non-alcoholic">
                            <NavigationMenuTrigger className="text-indigo-950 hover:text-orange-400 duration-500">Non-alcoholic</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/about">
                            <NavigationMenuTrigger className="text-indigo-950 hover:text-orange-400 duration-500">About us</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Link to="/search">
                <Button
                    variant='ghost'
                    className="text-indigo-950 fixed top-4 right-8"

                >
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
            </Link>
            <Link to="/favorites">
                <Button
                    variant='ghost'
                    className="text-indigo-950 fixed top-4 right-1"
                >
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
            </Link>
        </header>
    )
}
