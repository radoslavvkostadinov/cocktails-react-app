import { useState, useEffect } from 'react';

export default function FavoriteDrinks() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (drink) => {
    const updatedFavorites = [...favorites, drink];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Favorite Drinks</h1>
      <ul>
        {favorites.map((drink, index) => (
          <li key={index}>{drink.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}