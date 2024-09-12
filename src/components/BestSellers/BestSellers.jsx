import { useEffect } from "react";
import CardItem from "../Card/CardItem";
import { useDrinksStore } from "@/store/drinksStore";

export default function BestSellers() {

    const { drinks, loading, error, fetchDrinks } = useDrinksStore();

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        fetchDrinks(url);

    }, [fetchDrinks]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
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
        </>
    );
}

