import { useEffect } from "react";
import { useDrinksStore } from "@/store/drinksStore";
import { useParams } from "react-router-dom";

export default function DrinkDetails() {

    const { id } = useParams();
    const { fetchDrinks, drinks, loading, error } = useDrinksStore();

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetchDrinks(url);



    }, [fetchDrinks]);


    const drink = drinks && drinks.length > 0 ? drinks[0] : null;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!drinks) return <div>No drink found</div>;

    return (
        <div>
            <h1>{drink.strDrink}</h1>
            <p>{drink.strInstructions}</p>
        </div>
    );
}
