import CardItem from '@/components/Card/CardItem';
import Paginated from '@/components/Pagination/Pagination';
import { useState, useEffect } from 'react';

export default function FavoriteDrinks() {

  const [favoriteDrinks, setFavoriteDrinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDrinks(storedFavorites);
    console.log(favoriteDrinks);
  }, [favoriteDrinks]);

  const totalPages = Math.ceil(favoriteDrinks.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = favoriteDrinks.slice(startIndex, endIndex);
  console.log(currentItems);


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