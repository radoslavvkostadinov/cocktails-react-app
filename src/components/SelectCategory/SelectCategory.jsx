// import NavBar from "../NavBar/NavBar";

import { Button } from "../ui/button";

export default function SelectCategory({ onClick }) {
    return (
        <>
            {/* <NavBar /> */}
            <div className="flex justify-center items-center h-28 bg-wallpaper">
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Ordinary Drink
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Cocktail
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Cocoa
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Shot
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Shake
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Beer
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Homemade Liqueur
                </Button>
                <Button
                    className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                    onClick={onClick}>Soft Drink
                </Button>
            </div>
        </>
    )
}

