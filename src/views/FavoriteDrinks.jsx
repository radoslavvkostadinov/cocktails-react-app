import CardItem from '@/components/Card/CardItem';
import Paginated from '@/components/Pagination/Pagination';
import { useState, useEffect } from 'react';

export default function FavoriteDrinks() {

  const [favoriteDrinks, setFavoriteDrinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favoriteDrinks);
    setFavoriteDrinks(storedFavorites);
}, []);

  const totalPages = Math.ceil(favoriteDrinks.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = favoriteDrinks.slice(startIndex, endIndex);
 
  const handleFavoriteChange = (updatedFavorites) => {
    setFavoriteDrinks(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  return (
    <div>
      <h1>Favorite Drinks</h1>
      <div className="bg-indigo-950 pt-5 pb-4">
        {currentItems && currentItems.length > 0 ? (
          <div className="grid grid-cols-5 gap-5 m-5 h-full">
            {currentItems.map((drink) => (
              <CardItem
                key={drink.id}
                id={drink.id}
                title={drink.title}
                image={drink.image}
                onFavoriteChange={handleFavoriteChange}
              />
            ))}
          </div>
        ) : (
          <p>No drinks found.</p>
        )}
      </div>
      <Paginated
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}