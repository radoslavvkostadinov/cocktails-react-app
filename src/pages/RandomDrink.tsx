import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDrinksStore } from "../store/drinksStore";
import Loading from "../components/Loading/Loading";
import { Button } from "../components/ui/button";
import BiggerCardItem from "../components/BiggerCardItem/BiggerCardItem";


interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export default function RandomDrink() {
    const { drinks, loading, error, fetchDrinks } = useDrinksStore();

    useEffect(() => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetchDrinks(url);
    }, [fetchDrinks]);

    const drink: Drink | null = drinks && drinks.length === 1 ? drinks[0] : null;

    if (loading) return <Loading />;
    if (error) return (
        <div className="flex justify-center items-center min-h-screen bg-indigo-950">
            <p className="text-white text-xl">Error: {error.message}. Please try again later.</p>
        </div>
    );
    if (!drink) return (
        <div className="flex justify-center items-center min-h-screen bg-indigo-950">
            <p className="text-white text-xl">No drink found. Please refresh to try again.</p>
        </div>
    );

    return (
        <>
            <div className="flex justify-center items-center h-28 bg-indigo-950">
                <h1 className="text-4xl text-white">Bartender's Surprise</h1>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen p-10 w-full">
                <BiggerCardItem
                    strDrinkThumb={drink.strDrinkThumb}
                    id={drink.idDrink}
                    title={drink.strDrink}
                    image={drink.strDrinkThumb} strDrink={""} />
                <div className="flex items-center justify-center mt-5">
                    <Link to={`/drink/${drink.idDrink}`}>
                        <Button
                            className="text-indigo-950 px-4 py-2 rounded-md hover:bg-orange-300"
                            variant="secondary"
                            size="lg"
                        >
                            View Recipe
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
