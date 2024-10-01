import { useEffect, useState } from "react";
import { useDrinksStore } from "../store/drinksStore";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/Header";
import CardItem from "../components/Card/CardItem";
import Paginated from "../components/Pagination/Pagination";

export default function NonAlcoholicDrinks() {
    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
        fetchDrinks(url);
    }, [fetchDrinks]);

    if (loading) return <Loading />;
    if (error) return <p>Error: {(error as any).message}</p>;

    const totalPages = drinks ? Math.ceil(drinks.length / itemsPerPage) : 0;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = drinks?.slice(startIndex, endIndex) || [];

    return (
        <>
            <Header title="Sober Sips" />
            <div className="bg-indigo-950 pt-5 pb-3">
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-1 sm:m-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 m-5 h-full">
                        {currentItems.map(({ idDrink, strDrink, strDrinkThumb }) => (
                            <CardItem
                                key={idDrink}
                                id={idDrink}
                                title={strDrink}
                                image={strDrinkThumb}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-white text-center text-2xl">No drinks found.</p>
                )}
            </div>

            {totalPages > 1 && (
                <Paginated
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
}
