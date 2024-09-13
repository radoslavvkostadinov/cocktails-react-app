// import NavBar from "../NavBar/NavBar";

import { Button } from "../ui/button";

export default function SelectCategory({ onClick }) {
    return (
        <>
            {/* <NavBar /> */}
            <div className="flex justify-center items-center h-28 bg-wallpaper">
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Ordinary Drinks
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Cocktail
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Cocoa
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Shot
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Shake
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Beer
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Homemade Liqueur
                </Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Soft Drink
                </Button>
            </div>
        </>
    )
}

