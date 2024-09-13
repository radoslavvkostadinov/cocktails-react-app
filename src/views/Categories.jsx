import CardItem from "@/components/Card/CardItem";
import SelectCategory from "@/components/SelectCategory/SelectCategory";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect, useState } from "react";

export default function Categories() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();
    const [chooseCategory, setChooseCategory] = useState('Ordinary_Drink');

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${chooseCategory}`;
        fetchDrinks(url);
    }, [fetchDrinks, chooseCategory]);


    const handleCategoryChange = (e) => {

        const drink = e.target.textContent === 'Ordinary Drinks' ?
            'Ordinary_Drink' : e.target.textContent

        setChooseCategory(drink);

    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <SelectCategory onClick={handleCategoryChange} />

            {chooseCategory && (
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
                </div>
            )}
        </>
    );
}

