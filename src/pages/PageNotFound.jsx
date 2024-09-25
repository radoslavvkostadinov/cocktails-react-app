import cocktail from '../images/cocktail.png';
export default function PageNotFound() {
    return (
        <div className='flex justify-center items-center h-screen bg-indigo-950'>
            <div className='text-center'>
                <h1 className='text-white text-7xl m-5 sm:text-6xl sm:m-5'>404: Page Not Found</h1>
                <div className='text-white text-3xl sm:text-2xl'>Sorry, it looks like we've spilled our drink.</div>
                <img src={cocktail} alt="Spilled cocktail" />
            </div>
        </div>

    )
}
