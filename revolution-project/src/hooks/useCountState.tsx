import { useState } from "react";

const useCountState = ()=>{
    const [count,setCount] = useState(1);
    const handlePlus = () => {
        setCount(prevCount => prevCount < 9  ? prevCount + 1 : prevCount);
    }
    const handleMinus = () => {
        setCount(prevCount => prevCount > 1  ? prevCount - 1 : prevCount);
    }
    return{count,handleMinus,handlePlus}
}

export default useCountState