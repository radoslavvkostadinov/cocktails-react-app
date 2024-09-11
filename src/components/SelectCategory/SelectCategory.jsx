// import NavBar from "../NavBar/NavBar";

import { Button } from "../ui/button";

export default function SelectCategory({ onClick }) {
    return (
        <>
            {/* <NavBar /> */}
            <div className="flex justify-center items-center h-28 bg-gray-200">
                <Button onClick={onClick}>Ordinary drinks</Button>
                <Button onClick={onClick}>Cocktails</Button>
            </div>
        </>
    )
}

