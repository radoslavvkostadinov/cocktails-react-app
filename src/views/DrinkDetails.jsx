import { useEffect } from "react";
import { useDrinksStore } from "@/store/drinksStore";
import { useParams } from "react-router-dom";
import { search } from "@/customFunctions";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading/Loading";
import BiggerCardItem from "@/components/BiggerCardItem/BiggerCardItem";


export default function DrinkDetails() {

    const { id } = useParams();
    const { fetchDrinks, drinks, loading, error } = useDrinksStore();


    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetchDrinks(url);


    }, [fetchDrinks]);


    const drink = drinks && drinks.length > 0 ? drinks[0] : null;
    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    if (!drinks) return <div>No drink found</div>;

    const ingredients = search('Ingredient', drink);
    const measurements = search('Measure', drink);
    const steps = drink?.strInstructions ? drink?.strInstructions.split('. ') : ['Enjoy'];

    return (
        <>
            <h1 className="text-3xl text-orange-100 mt-4 text-center">{drink.strDrink}</h1>
            <div className="mx-auto p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 flex flex-col items-center mb-4 w-full h-full md:mb-0">
                    <div>
                        <BiggerCardItem
                            strDrink={drink.strDrink}
                            strDrinkThumb={drink.strDrinkThumb}
                            id={drink.idDrink}
                            title={drink.strDrink}
                            image={drink.strDrinkThumb}
                        />
                        <div className="2xl:ml-2">
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
                </div>
                <div className="border-2 w-full md:w-1/2 md:pl-6 h-full bg-orange-gradient flex flex-col justify-around rounded-md items-center mr-24 xl:ml-48 lg:ml-48 md:ml-48 sm:mr-2 2xl:w-4/12 2xl:mr-52 xl:w-6/12 xs:flex xs:flex-col xs:justify-center xs:items-center">
                    <div className="w-full 2xl:w-11/12 2xl:mr-28 xl:ml-20 xl:mr-3 xs:flex xs:flex-col xs:justify-center xs:items-center md:mr-20 2xl:mr-52">
                        <h2 className="2xl:ml-72 ml-8 text-2xl text-indigo-950 ml-2 mt-2 mb-2 2xl:ml-7 xl:ml-7 md:mr-24 sm:ml-14 xl:ml-12">Ingredients</h2>
                        <ul className="ml-6 list-disc list-inside mb-4 md:mr-2 lg:mr-5 xl:mr-44 2xl:w-full">
                            {ingredients.map((ingredient, index) => (
                                <span key={index} className="block text-lg m-2 px-4 py-1 bg-indigo-950 text-white rounded-md mr-7 md:w-72 sm:w-92 sm:ml-7 2xl:w-full xl:w-96
                                2xl:mr-2 lg:w-full xl:w-full" >
                                    🔸 {measurements[index]} {ingredient}
                                </span>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:w-11/12 sm:mr-10 xs:ml-10 2xl:w-11/12 2xl:mb-4 mr-6 mb-2 md:mr-12 lg:mr-16">
                        <h2 className="text-2xl text-indigo-950 ml-2 text-center mb-2 m-2 lg:ml-12">Instructions</h2>
                        <div className="ml-6 mb-2 bg-indigo-950 rounded-md text-lg text-white font-sans sm:w-92 sm:ml-6 md:w-72 xs:w-92 xs:ml-6 xs:w-72 lg:w-92 lg:ml-6 lg:w-72 xl:w-96 xl:mr-5 sm:w-full lg:w-full xl:ml-20 2xl:w-full 2xl:ml-5">
                            {steps.map((step, index) => (
                                <p key={index} className="m-4 2xl:m-2 2xl:ml-4 xl:m-2 xl:ml-4 md:m-2 md:ml-4 sm:m-2 sm:ml-4 xs:m-2 xs:ml-4 xl:w-100">
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

