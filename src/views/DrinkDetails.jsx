import { useEffect } from "react";
import { useDrinksStore } from "@/store/drinksStore";
import { useParams } from "react-router-dom";
import { search } from "@/customFunctions";
import { Badge } from "@/components/ui/badge";

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

    const ingredients = search('Ingredient', drink);
    const measurements = search('Measure', drink);
    const steps = drink.strInstructions ? drink.strInstructions.split('. ') : ['Enjoy'];

    return (
        <>
            <h1 className="text-3xl text-white mt-4 text-center">{drink.strDrink}</h1>
            <div className="mx-auto p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 flex flex-col items-center mb-4 w-full h-full md:mb-0">
                    <div>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-11/12 h-full rounded-lg shadow-lg mb-4" />
                        <div>
                            <h1 className="text-white text-xl mb-1">Categories</h1>
                            <Badge variant="secondary" className="text-base">{drink.strCategory}</Badge>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-white text-xl mb-1">Glass</h1>
                            <Badge variant="secondary" className="text-base">{drink.strGlass}</Badge>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-6 h-full bg-white-wall flex flex-col justify-around rounded-md items-center mr-24">
                    <div className="w-full">
                        <h2 className="text-2xl text-indigo-950 ml-2 mt-2 mb-2">Ingredients</h2>
                        <ul className="list-disc list-inside mb-4">
                            {ingredients.map((ingredient, index) => (
                                <span key={index} className="block text-lg m-2 px-4 py-1 bg-indigo-950 text-white rounded-md mr-7">
                                    🔸 {measurements[index]} {ingredient}
                                </span>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full mr-6 mb-2">
                        <h2 className="text-2xl text-indigo-950 ml-2 text-center mb-2 m-2">Instructions</h2>
                        <div className="bg-indigo-950 rounded-md text-lg text-white font-sans">
                            {steps.map((step, index) => (
                                <p key={index} className="m-1">
                                    Step {index + 1}: {step}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

