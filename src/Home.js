import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Bank from './Bank'
export default function Home() {
    const [income, setIncome] = useState(0)

    const handleIncome = (e)=>{
setIncome(e.target.value);
    }
 


    return (
        <div>
           
            <h1>Please write your mounthly income</h1>
            <input type="number" onChange={handleIncome}></input>
            
          {income > 0 && <Bank income={income} setIncome={setIncome}/>} 
        </div>
    )
}
