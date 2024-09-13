import { useEffect, useState } from "react";
import CardItem from "../Card/CardItem";
import { useDrinksStore } from "@/store/drinksStore";
import Paginated from "@/components/Pagination/Pagination";

export default function BestSellers() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        fetchDrinks(url);
    }, [fetchDrinks]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const totalPages = Math.ceil(drinks.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = drinks.slice(startIndex, endIndex);

    return (
        <>
            <div className="bg-indigo-950 pt-5 pb-4">
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
                    <p>No drinks found.</p>
                )}
            </div>
           
                <Paginated
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            
        </>
    );
}