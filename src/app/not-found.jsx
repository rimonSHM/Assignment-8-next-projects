import { Link } from "lucide-react";

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col space-y-2 gap-4'>
            <h2 className='font-bold text-5xl text-purple-500'>This page is not found </h2>
            <Link href="/" className='btn text-white bg-purple-500 hover:bg-purple-600 text-buld'>Go Back To Home</Link>
        </div>
    );
};

export default NotFound;