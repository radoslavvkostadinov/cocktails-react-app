import CardItem from "@/components/Card/CardItem";
import SelectCategory from "@/components/SelectCategory/SelectCategory";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect, useState } from "react";

export default function Categories() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [isOrdinaryDrink, setOrdinaryDrink] = useState(true);
    const category = isOrdinaryDrink ? 'Ordinary_Drink' : 'Cocktail';

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
        fetchDrinks(url);
        console.log(drinks);
    }, [fetchDrinks, category]);

    const handleCategoryClick = () => {
        if (isOrdinaryDrink !== true) {
            setOrdinaryDrink(true);
        } else if (isOrdinaryDrink !== false) {
            setOrdinaryDrink(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <SelectCategory
                onClick={handleCategoryClick}
            />

            {isOrdinaryDrink ? (
                <div className="bg-indigo-950 pt-5">
                    {drinks && drinks.length > 0 ? (
                        <div className="grid grid-cols-5 gap-5 m-5">
                            {drinks.map((drink) => (
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
                </div>) : <div className="bg-indigo-950 pt-5">
                {drinks && drinks.length > 0 ? (
                    <div className="grid grid-cols-5 gap-5 m-5">
                        {drinks.map((drink) => (
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
            </div>}

        </>
    );
}


// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail