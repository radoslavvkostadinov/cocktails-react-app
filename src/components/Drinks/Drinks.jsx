import { useEffect, useState } from "react";
import CardItem from "../Card/CardItem";

export default function Drinks() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch(url);
            console.log(response);
            const drinks = await response.json();
            console.log(drinks);
            setProducts(drinks.drinks);

        }

        fetchDrinks();
    }, [])

    return (
        <div className="bg-indigo-950">
            {products && products.length > 0 ? (
          <div className="grid grid-cols-5 gap-5">
                    {products.map((drink, index) => (
                        <CardItem key={index} title={drink.strDrink} image={drink.strDrinkThumb} />
                    ))}
                </div>
            ) : (
                <p>No drinks found.</p>
            )}
        </div>
    );
}

