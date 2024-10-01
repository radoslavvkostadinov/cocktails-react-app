import React from 'react';
import { useEffect, useState } from 'react';
import { useDrinksStore } from '../store/drinksStore';
import Loading from '../components/Loading/Loading';
import CardItem from '../components/Card/CardItem';
import { Button } from '../components/ui/button';

export default function SearchDrinks() {
    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [searchTerm, setSearchTerm] = useState('');
    interface Drink {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
    }

    const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);


    useEffect(() => {
        if (drinks) {
            const beverages = drinks.filter(drink =>
                drink.strDrink.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
            setFilteredDrinks(beverages);
        }
    }, [debouncedSearchTerm, drinks]);


    useEffect(() => {
        const url = debouncedSearchTerm
            ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedSearchTerm}`
            : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
        fetchDrinks(url);
    }, [fetchDrinks, debouncedSearchTerm]);

    if (loading) return <Loading />;
    if (error) return <p className="text-red-500 text-center">Error: {error.message}. Please try again later.</p>;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center z-10 mt-20 mr-20">
                <label htmlFor="drink-search" className="sr-only">Search for drinks</label>
                <input
                    id="drink-search"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for drinks..."
                    className="px-4 py-2 border rounded-md m-10 w-full"
                    autoFocus
                />
            </div>
            {searchTerm && (
                <div className="bg-indigo-950 pt-5 pb-4 w-full">
                    {filteredDrinks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-1 sm:m-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 m-5 h-full">
                            {filteredDrinks.map((drink) => (
                                <CardItem
                                    key={drink.idDrink}
                                    id={drink.idDrink}
                                    title={drink.strDrink}
                                    image={drink.strDrinkThumb}
                                />
                            ))}
                            <Button
                                size='default'
                                variant='ghost'
                                className="text-indigo-950 rounded-full bg-gray-200 fixed bottom-5 right-4"
                                onClick={handleScrollToTop}
                            >
                                👆
                            </Button>
                        </div>
                    ) : (
                        <p className="text-white text-center text-2xl">No drinks found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
