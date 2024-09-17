import Header from "@/components/Header/Header";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header title="About us" />
            <div className="bg-white-wall flex items-center justify-center w-7/12 h-full mt-24 rounded-md">
                <p className="text-xl p-2 leading-normal">Welcome to Tasty Sips, your ultimate destination for discovering and sharing cocktail recipes. Whether you're a seasoned mixologist or just starting out, we have something for everyone.
                    Our mission is to bring the joy of cocktail making to everyone. We believe that making cocktails should be fun, easy, and accessible to all. Our team of experts is dedicated to providing you with the best recipes, tips, and tricks to elevate your cocktail game.
                    Join us on this exciting journey and let's make some amazing cocktails together!</p>
            </div>

        </div>
    )
}