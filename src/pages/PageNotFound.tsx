import cocktail from '../images/cocktail.png';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='flex justify-center items-center h-screen bg-indigo-950'>
            <div className='text-center'>
                <h1 className='text-white text-7xl m-5 sm:text-6xl sm:m-5'>404: Page Not Found</h1>
                <div className='text-white text-3xl sm:text-2xl'>Sorry, it looks like we've spilled our drink.</div>
                <img src={cocktail} alt="A spilled cocktail in a glass" className="mt-5 w-1/2 sm:w-3/4 md:w-1/3 transition-transform duration-500 transform hover:scale-105" />
                <div className="mt-5">
                    <Link to="/" className="text-indigo-200 hover:text-indigo-100 text-lg font-semibold">
                        Go back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
