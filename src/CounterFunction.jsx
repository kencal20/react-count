
import React,{useState} from 'react';

const CounterFunction = () => {
const [ count, countupdate] = useState({number:0})  

    return (
        <div>
           <h1>Counter:{count.number}</h1> 
           <hr/>
           <button onClick={()=>countupdate({number:count.number + 1})}>Increase</button>
           <button onClick={()=>countupdate({number:count.number - 1})}>Decrease</button>
        </div>
    );
}

export default CounterFunction;
