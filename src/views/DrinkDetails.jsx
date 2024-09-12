import { useEffect, useState } from "react";
import { useDrinksStore } from "@/store/drinksStore";
import { useParams } from "react-router-dom";
import { search } from "@/customFunctions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    console.log(steps);
    return (
        <div className="mx-auto p-6 bg-wallpaper rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-center">{drink.strDrink}</h1>
            <div className="w-full mx-auto p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-9/12 h-full rounded-lg shadow-lg mb-4" />
                    <Badge variant="secondary">{drink.strCategory}</Badge>
                    <Badge className="w-50" variant="destructive">{drink.strGlass}</Badge>
                </div>
                <div className="md:w-1/2 md:pl-6">
                    <h2 className="text-xl font-bold ml-2">Ingredients</h2>
                    <ul className="list-disc list-inside mb-4">
                        {ingredients.map((ingredient, index) => (
                            <Button key={index} className="block text-lg m-2 px-4 py-1 bg-indigo-950 text-white">
                                {measurements[index]} {ingredient}
                            </Button>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold ml-2 text-center m-2">Instructions</h2>
                    <div className="bg-white rounded-md text-lg font-sans font-bold">
                        {steps.map((step, index) => (
                            <p key={index} className="ml-2">
                                Step {index + 1}: {step}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

// <Badge variant="outline">{drink.strCategory}</Badge>
// <Badge variant="outline">{drink.strGlass}}</Badge>
