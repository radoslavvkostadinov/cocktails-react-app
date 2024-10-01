
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";


interface CardItemProps {
    id: string;
    title: string;
    image: string;
    onFavoriteChange?: (id: string, isFavorite: boolean) => void;
}

const CardItem: React.FC<CardItemProps> = ({ id, title, image, onFavoriteChange }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        try {
            const storedFavorites: { id: string; title: string; image: string }[] = JSON.parse(localStorage.getItem('favorites') || '[]');
            setIsFavorite(storedFavorites.some(drink => drink.id === id));
        } catch (e) {
            console.error('Error parsing favorites from localStorage', e);
            setIsFavorite(false);
        }
    }, [id]);

    const toggleFavorite = () => {
        try {
            const storedFavorites: { id: string; title: string; image: string }[] = JSON.parse(localStorage.getItem('favorites') || '[]');
            const updatedFavorites = isFavorite
                ? storedFavorites.filter(drink => drink.id !== id)
                : [...storedFavorites, { id, title, image }];

            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(!isFavorite);

            if (onFavoriteChange) {
                onFavoriteChange(id, !isFavorite);
            }
        } catch (e) {
            console.error('Error updating favorites in localStorage', e);
        }
    };

    return (
        <Card
            className="relative w-80 h-82 mx-auto flex flex-col justify-center items-center shadow-2xl bg-gray-100 rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col justify-center items-center z-0">
                <img src={image}
                    alt={title}
                    className="rounded-md w-full h-full p-2 rounded-xl" />
                <CardTitle className="text-center mb-2">{title}</CardTitle>
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
};

export default CardItem;