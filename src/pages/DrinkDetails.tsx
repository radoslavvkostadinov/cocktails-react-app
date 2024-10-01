import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDrinksStore } from "../store/drinksStore";
import Loading from "../components/Loading/Loading";
import BiggerCardItem from "../components/BiggerCardItem/BiggerCardItem";
import { Badge } from "../components/ui/badge";
import { search } from "utils/customFunctions";

export default function DrinkDetails() {
    const { id } = useParams();
    const { fetchDrinks, drinks, loading, error }: { fetchDrinks: (url: string) => void, drinks: any[], loading: boolean, error: { message: string } | null } = useDrinksStore() as { fetchDrinks: (url: string) => void, drinks: any[], loading: boolean, error: { message: string } | null };

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetchDrinks(url);
    }, [fetchDrinks, id]);


    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    if (!drinks || drinks.length === 0) return <div>No drink found</div>;

    const drink = drinks[0];
    const ingredients = search('Ingredient', drink);
    const measurements = search('Measure', drink);
    const steps = drink?.strInstructions ? drink.strInstructions.split('. ') : ['Enjoy'];

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <h1 className="text-3xl rounded-md text-white mt-4 text-center bg-indigo-950 w-8/12">{drink.strDrink}</h1>
            </div>
            <div className="z-40 mx-auto p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-center mt-10">
                <div className="md:w-1/2 flex flex-col items-center mb-4 w-full h-full md:mb-0">
                    <div className="z-40">
                        <BiggerCardItem
                            strDrink={drink.strDrink}
                            strDrinkThumb={drink.strDrinkThumb}
                            id={drink.idDrink}
                            title={drink.strDrink}
                            image={drink.strDrinkThumb}
                        />
                        <div className="2xl:ml-2">
                            <div>
                                <h1 className="text-white text-xl mb-1 bg-indigo-950 rounded-md w-24 ml-2">Categories</h1>
                                <Badge variant="secondary" className="text-base ml-2">{drink.strCategory}</Badge>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-white text-xl mb-1 bg-indigo-950 rounded-md w-14 pl-1 ml-2">Glass</h1>
                                <Badge variant="secondary" className="text-base ml-2">{drink.strGlass}</Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md w-full md:w-1/2 h-full bg-orange-gradient flex flex-col justify-center items-center p-6 md:ml-48 sm:mr-2 2xl:w-4/12 xl:w-6/12">
                    <div className="w-full flex flex-col items-center xl:w-11/12 md:w-11/12 sm:w-11/12">
                        <h2 className="text-2xl text-indigo-950 mt-2 mb-1">Ingredients</h2>
                        <ul className="w-full list-disc list-inside mb-4">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-center text-lg m-2 px-4 py-1 bg-indigo-950 text-white rounded-md w-full">
                                    <span className="mr-2">🔸</span>
                                    <span >{measurements[index]} {ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full ml-2 flex flex-col items-center justify-center sm:w-11/12 mb-2">
                        <h2 className="text-2xl text-indigo-950 text-lef mb-2">Instructions</h2>
                        <div className="bg-indigo-950 rounded-md text-lg text-white font-sans w-full p-2">
                            {steps.map((step: string, index: number) => (
                                <p key={index} className="m-2 text-lg">
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
