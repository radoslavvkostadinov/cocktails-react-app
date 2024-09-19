import CardItem from '@/components/Card/CardItem';
import Loading from '@/components/Loading/Loading';
import Paginated from '@/components/Pagination/Pagination';
import { useDrinksStore } from '@/store/drinksStore';
import { useEffect, useState } from 'react';

export default function SearchDrinks() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDrinks, setFilteredUsers] = useState([])


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);

        const beverages = drinks?.filter(drink =>
            drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(beverages);
    };


    useEffect(() => {
        const url = searchTerm ?
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}` :
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
        // console.log(url);
        fetchDrinks(url);
    }, [fetchDrinks, searchTerm]);


    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredDrinks?.slice(startIndex, endIndex);
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center z-10 s:mr-16 s:mt-20">
                <input
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
                    {currentItems && currentItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:m-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 m-5 h-full">
                            {currentItems.map((drink) => (
                                <CardItem
                                    key={drink.idDrink}
                                    id={drink.idDrink}
                                    title={drink.strDrink}
                                    image={drink.strDrinkThumb}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-white text-center text-2xl">No drinks found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
