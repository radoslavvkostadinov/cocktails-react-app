import Header from "@/components/Header/Header";

export default function About() {

    return (
        <>
              <div className="flex justify-center items-center h-28 bg-indigo-950">
                <h1 className="text-4xl text-white">About us</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-orange-gradient flex items-center justify-center w-7/12 h-full mt-24 rounded-md lg:mb-28 md:mb-28 md:w-11/12 sm:mb-24
                sm:w-11/12 s:mb-16 s:w-10/12">
                    <div className="text-xl p-2 leading-normal text-indigo-950">
                        <p>Welcome to Tasty Sips, your ultimate destination for sharing cocktail recipes. Whether you're a seasoned mixologist or just starting out, we have something for everyone.</p>
                        <p>Our mission is to bring the joy of cocktail making to everyone. We believe that making cocktails should be fun, easy, and accessible to all. Our team of experts is dedicated to providing you with the best recipes, tips, and tricks to elevate your cocktail game.</p>
                        <p>Join us on this exciting journey and let's make some amazing cocktails together!</p>
                    </div>
                </div>
            </div>
        </>
    )
}