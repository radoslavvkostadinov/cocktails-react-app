import CardItem from "@/components/Card/CardItem";
import { useDrinksStore } from "@/store/drinksStore";
import { useEffect } from "react";


export default function RandomDrink() {
    // const { id } = useParams();
    const { drinks, loading, error, fetchDrinks } = useDrinksStore();


    useEffect(() => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetchDrinks(url);
        console.log(drinks);
    }, []);


    const drink = drinks && drinks.length === 1 ? drinks[0] : null;
    console.log(drink);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!drinks) return <div>No drink found</div>;
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            {drink && (
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-64 h-64 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold mb-2">{drink.strDrink}</h5>
            
                    </div>
                </div>
            )}
        </div>
    );
}
 