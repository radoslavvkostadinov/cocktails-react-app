import { useEffect, useState } from "react";

export default function BiggerCardItem({ strDrinkThumb, strDrink, id, title, image }) {
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

    }
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
}