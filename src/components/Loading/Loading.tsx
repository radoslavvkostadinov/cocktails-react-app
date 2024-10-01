import React from "react";
import ReactLoading from "react-loading";

const Loading: React.FC = () => {
    return (
        <div role="status" className="flex items-center justify-center h-screen">
            <ReactLoading type="cylon" color="#FFFFFF" height={300} width={300} />
        </div>
    );
}

export default Loading;