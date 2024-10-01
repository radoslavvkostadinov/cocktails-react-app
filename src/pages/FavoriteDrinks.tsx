import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import CardItem from '../components/Card/CardItem';
import Paginated from '../components/Pagination/Pagination';

export default function FavoriteDrinks() {
  const [favoriteDrinks, setFavoriteDrinks] = useState<FavoriteDrink[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteDrinks(storedFavorites);
  }, []);

  const totalPages = Math.ceil(favoriteDrinks.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = favoriteDrinks.slice(startIndex, endIndex);

  type FavoriteDrink = {
    id: string;
    title: string;
    image: string;
  };

  const handleFavoriteChange = (id: string, isFavorite: boolean) => {
    const updatedFavorites = isFavorite
      ? [...favoriteDrinks, favoriteDrinks.find(drink => drink.id === id)!]
      : favoriteDrinks.filter(drink => drink.id !== id);

    setFavoriteDrinks(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Header title="Favorite Drinks" />
      <div className="bg-indigo-950 pt-5 pb-4">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:m-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 m-5 h-full">
            {currentItems.map(({ id, title, image }) => (
              <CardItem
                key={id}
                id={id}
                title={title}
                image={image}
                onFavoriteChange={handleFavoriteChange}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-center text-2xl">You haven't added any favorites yet.</p>
        )}
      </div>
      {favoriteDrinks.length > 0 && (
        <Paginated
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
