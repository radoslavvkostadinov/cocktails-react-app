import CardItem from "@/components/Card/CardItem";
import Loading from "@/components/Loading/Loading";
import Paginated from "@/components/Pagination/Pagination";
import SelectCategory from "@/components/SelectCategory/SelectCategory";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect, useState } from "react";

export default function Categories() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const [chooseCategory, setChooseCategory] = useState('Ordinary_Drink');

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${chooseCategory}`;
        fetchDrinks(url);
    }, [fetchDrinks, chooseCategory]);


    const handleCategoryChange = (category) => {

      console.log(category);
        const drink = category === 'Ordinary Drink' ?
            'Ordinary_Drink' : category
        setChooseCategory(drink);
        setCurrentPage(1);

    };

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
            <SelectCategory onClick={handleCategoryChange} />
            {chooseCategory && (
                <div className="bg-indigo-950 pt-5 pb-4">
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

            )}
            <Paginated
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}

