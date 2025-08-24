
import { useState } from 'react';
import Jug from './Jug'
import { FaTint, FaRegTrashAlt } from "react-icons/fa";

const FillingWater = () => {
    const [isFilling, setIsFilling] = useState(30);

    const handleFillWater = () => {
        console.log("Filling water...");
        setIsFilling((prev)=>{
            const newValue = prev + Math.floor(Math.random() * 15) ;
            if(newValue >= 100) return 100;
            return newValue;
        })
    }

    const handleEmpty = () => {
            setIsFilling((prev)=>{
                const newValue = prev - Math.floor(Math.random() * 15) ;
                if(newValue <= 0) return 0;
                return newValue;
            })
    }
 

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white'>
            <h1 className='text-3xl font-bold mb-8'>Fill the Jug</h1>
            <Jug isFilling={isFilling} />

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleFillWater}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                    <FaTint /> Fill Water
                </button>
                <button
                    onClick={handleEmpty}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                >
                    <FaRegTrashAlt /> Empty
                </button>
            </div>
        </div>
    )
}

export default FillingWater