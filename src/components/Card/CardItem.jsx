
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


export default function CardItem({ id, title, image, onFavoriteChange }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        try {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setIsFavorite(storedFavorites.some(drink => drink.id === id));
        } catch (e) {
            console.error('Error parsing favorites from localStorage', e);
            setIsFavorite(false);
        }
    }, [id]);

    const toggleFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = isFavorite
            ? storedFavorites.filter(drink => drink.id !== id)
            : [...storedFavorites, { id, title, image }];

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);

        try {
            onFavoriteChange(updatedFavorites);

        } catch (e) {
            e
        }
    }

    return (
        <Card
            className="relative w-10/12 h-80 mx-auto flex flex-col justify-center items-center shadow-2xl bg-gray-100 rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col justify-center items-center">
                <img src={image}
                    alt={title}
                    className="rounded-md w-full p-2 rounded-xl" />
                <CardTitle className="text-center mb-1">{title}</CardTitle>
            </div>
            {isHovered && (
                <>
                    <div className="absolute inset-0 flex justify-center items-center bg-indigo-200 bg-opacity-50">
                        <Link to={`/drink/${id}`}>
                            <Button
                                className="text
                            -indigo-950 px-4 py-2 rounded-md mr-2 hover:bg-orange-300"
                                variant="secondary"
                                size="sm"
                            >
                                View Recipe
                            </Button>
                        </Link>
                        <button onClick={toggleFavorite}>
                            <span className="text-2xl absolute top-2 right-2">
                                {isFavorite ? '❤️' : '🤍'}
                            </span>
                        </button>

                    </div>
                </>
            )}
        </Card>
    );
}
