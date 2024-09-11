// import NavBar from "../NavBar/NavBar";

import { Button } from "../ui/button";

export default function SelectCategory({ onClick }) {
    return (
        <>
            {/* <NavBar /> */}
            <div className="flex justify-center items-center h-28 bg-gray-300">
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white m-2"
                    onClick={onClick}>Ordinary drinks</Button>
                <Button
                    className="bg-orange-wall border text-base hover:font-bold text-white"
                    onClick={onClick}>Cocktails</Button>
            </div>
        </>
    )
}

