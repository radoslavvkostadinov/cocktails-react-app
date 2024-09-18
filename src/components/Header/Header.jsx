export default function Header({ title }) {
    return (
        <>
            <div className="flex justify-center items-center h-28 bg-wallpaper">
                <h1 className="text-4xl text-white xl:mt-4">{title}</h1>
            </div>
        </>
    )
}

