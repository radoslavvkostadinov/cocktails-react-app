import { useEffect, useState } from "react";
import CardItem from "../Card/CardItem";
import { useDrinksStore } from "@/store/drinksStore";
import Paginated from "@/components/Pagination/Pagination";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

export default function BestOfTheBar() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        fetchDrinks(url);
    }, [fetchDrinks]);

    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

    const totalPages = Math.ceil(drinks?.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = drinks?.slice(startIndex, endIndex);

    return (
        <>
            <Header title='Best Of The Bar' />
            <div data-testid="indigo-div" className="bg-indigo-950 pt-5 pb-3">
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