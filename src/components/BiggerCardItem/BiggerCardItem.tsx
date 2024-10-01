import React from "react";
import { useEffect, useState } from "react";

interface BiggerCardItemProps {
    strDrinkThumb: string;
    strDrink: string;
    id: string;
    title: string;
    image: string;
}

const BiggerCardItem: React.FC<BiggerCardItemProps> = ({ strDrinkThumb, strDrink, id, title, image }) => {
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
        } catch (e) {
            console.error('Error updating favorites in localStorage', e);
        }
    };

    return (
        <div className="relative" >
            <img src={strDrinkThumb} alt={strDrink} className="w-full h-full rounded-lg shadow-lg mb-4 transition-opacity duration-300" />
            <div className="absolute inset-0 flex justify-center items-center">
                <button onClick={toggleFavorite} className="absolute top-1 right-1">
                    <span className="text-4xl">
                        {isFavorite ? '❤️' : '🤍'}
                    </span>
                </button>
            </div>

        </div>
    );
};

export default BiggerCardItem;