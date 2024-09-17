import BiggerCardItem from "@/components/BiggerCardItem/BiggerCardItem";
import CardItem from "@/components/Card/CardItem";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function RandomDrink() {
    const { drinks, loading, error, fetchDrinks } = useDrinksStore();


    useEffect(() => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetchDrinks(url);
    }, []);



    const drink = drinks && drinks.length === 1 ? drinks[0] : null;
    if (loading) return <Loading />
    if (error) return <div>Error: {error.message}</div>;
    if (!drinks) return <div>No drink found</div>;
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-10 w-11/12">
                {drink && (
                    <BiggerCardItem
                        strDrinkThumb={drink.strDrinkThumb}
                        id={drink.idDrink}
                        title={drink.strDrink}
                        image={drink.strDrinkThumb}
                    />
                )}
                <div className="flex items-center justify-center">
                    <Link to={`/drink/${drink?.idDrink}`}>
                        <Button
                            className="text
                            -indigo-950 px-4 py-2 rounded-md hover:bg-orange-300"
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
