import CardItem from "@/components/Card/CardItem";
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


    const handleCategoryChange = (e) => {

        const drink = e.target.textContent === 'Ordinary Drink' ?
            'Ordinary_Drink' : e.target.textContent
        setChooseCategory(drink);
        setCurrentPage(1);

    };

    if (loading) return <p>Loading...</p>;
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

            )}
            <Paginated
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}

