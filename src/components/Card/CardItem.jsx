import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";


export default function CardItem({ title, image }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className="relative w-10/12 h-80 mx-auto flex flex-col justify-center items-center shadow-2xl bg-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col justify-center items-center">
                <img src={image}
                    alt={title}
                    className="rounded-md w-full p-2 rounded-xl" />
                <CardTitle className="text-center">{title}</CardTitle>
            </div>
            {isHovered && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <Button className="bg-white text-black px-4 py-2 rounded-md mr-2">
                        View Details
                    </Button>
                    <HeartIcon className="w-8 h-8 text-red-500" />
                </div>
            )}
        </Card>
    );
}
