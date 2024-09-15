
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import DrinkDetails from "@/views/DrinkDetails";
import { EMPTY_HEART, FULL_HEART } from "@/constants";


export default function CardItem({ id, title, image }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <Card
            className="relative w-10/12 h-80 mx-auto flex flex-col justify-center items-center shadow-2xl bg-gray-100 rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        // onClick={onClick}
        >
            <div className="flex flex-col justify-center items-center">
                <img src={image}
                    alt={title}
                    className="rounded-md w-full p-2 rounded-xl" />
                <CardTitle className="text-center">{title}</CardTitle>
            </div>
            {isHovered && (
                <>
                    <div className="absolute inset-0 flex justify-center items-center bg-indigo-200 bg-opacity-50">
                        <Link to={`/drink/${id}`}>
                            <Button className="bg-white text-black px-4 py-2 rounded-md mr-2">
                                View Recipe
                            </Button>
                        </Link>
                        <button onClick={toggleFavorite}>
                            <span className={`text-2xl `}>
                                {isFavorite ? '❤️' : '🤍'}
                            </span>
                        </button>

                    </div>
                </>
            )}
        </Card>
    );
}
