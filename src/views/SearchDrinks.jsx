import CardItem from '@/components/Card/CardItem';
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


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const totalPages = Math.ceil(filteredDrinks?.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredDrinks?.slice(startIndex, endIndex);
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="text-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for drinks..."
                    className="px-4 py-2 border rounded-md"
                    autoFocus
                />
            </div>
            {searchTerm && (
                <div className="bg-indigo-950 pt-5 pb-4 w-full">
                    {currentItems && currentItems.length > 0 ? (
                        <div className="grid grid-cols-5 gap-5 m-5 h-full">
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
                        <p className="text-white text-center">No drinks found.</p>
                    )}
                    <Paginated
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
}
