import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function CardItem({ title, image }) {
    return (
        <Card className="w-10/12 h-80 mx-auto flex flex-col justify-center items-center shadow-2xl bg-gray-100">
            <CardContent className="flex flex-col justify-center items-center pt-9">
                <img src={image} alt={title} style={{ width: '254px' }} className="rounded-md"/>
                <CardTitle className="mt-2 text-center">{title}</CardTitle>
            </CardContent>
        </Card>
    );
}
