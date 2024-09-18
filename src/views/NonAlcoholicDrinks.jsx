import CardItem from "@/components/Card/CardItem";
import Header from "@/components/Header/Header";
import Loading from "@/components/Loading/Loading";
import Paginated from "@/components/Pagination/Pagination";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect, useState } from "react";

export default function NonAlcoholicDrinks() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;


    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
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
            <Header title='Sober Sips' />
            <div className="bg-indigo-950 pt-5 pb-3">
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
