import {useState} from "react";


const Counter = ()=>{

    const [count, setCount] = useState(0);


    return (
        <button data-testid="count-button" onClick={()=>setCount(count + 1)}>{count}</button>
    )
}


export default Counter;