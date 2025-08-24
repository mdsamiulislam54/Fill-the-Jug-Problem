import { useEffect, useState } from "react";


const Jug = ({isFilling}) => {
   
const [controlAnimation , setControlAnimation] = useState(false);


useEffect(()=>{
  setControlAnimation(true);
  const time = setTimeout(()=>{
    setControlAnimation(false)
  },3000)
  return ()=>{
    clearTimeout(time)
  }
},[isFilling])



  return (
    <div className="relative w-40 h-60 mx-auto mt-20 z-40  ">
      {/* Jug Body */}
      <div className="w-full h-full border-4 border-t-0 border-black rounded-b-full bg-gray-100 relative overflow-hidden">
        {/* Water inside jug */}
        <div 
         style={{ height: `${isFilling}%` }}
        className={`absolute bottom-0 w-full  bg-gradient-to-br from-blue-500 to-white bg-opacity-70 ${controlAnimation && 'wave'}`}>
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg animate-pulse ">
          {isFilling > 0 ? `${isFilling}%` : ''}
        </span>
        </div>
      </div>

  
      {/* Jug Handle */}
      <div className="absolute top-10 -right-10 w-10 h-32 border-8 border-l-0 border-black  z-0"></div>
    </div>
  );
};

export default Jug;
