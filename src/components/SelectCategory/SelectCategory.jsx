import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import PropTypes from 'prop-types';

export default function SelectCategory({ onClick }) {

    const categories = ["Select Category", "Ordinary Drink", "Cocktail", "Cocoa", "Shot", "Shake", "Beer", "Homemade Liqueur", "Soft Drink"];
    const removeSelectCategoryBtn = categories.filter((category) => category !== 'Select Category');

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectCategory, setSelectCategory] = useState('')

    const handleChange = (e) => {

        const category = e.target.value;
        setSelectCategory(category);
        onClick(category);

    }

    const handleButtonClick = (category) => {

        setSelectCategory(category);
        onClick(category);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1050);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <div className="flex justify-center items-center h-28 mt-20">
                {isSmallScreen ? (
                    <select
                        className="px-4 py-2 border rounded-md m-10 w-64 z-40"
                        onChange={handleChange}
                        value={selectCategory}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category} >
                                {category}
                            </option>
                        ))}
                    </select>
                ) : (
                    removeSelectCategoryBtn.map((category) => (
                        <Button
                            key={category}
                            className="bg-orange-wall border text-md text-white m-2 hover:text-indigo-950"
                            onClick={() => handleButtonClick(category)}
                        >
                            {category}
                        </Button>
                    ))
                )}
            </div>
        </>
    );
}

SelectCategory.propTypes = {
    onClick: PropTypes.func.isRequired,
};