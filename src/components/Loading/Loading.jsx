import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <ReactLoading type="cylon" color="#FFFFFF" height={300} width={300} />
        </div>
    );
}