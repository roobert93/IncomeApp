import React,{useState,useEffect}from 'react';
import './App.css';






export default function App() {
const [amount, setAmount] = useState("");
const [income,setIncome] = useState("");
const [text,setText] = useState("");
const [buyAmount,setBuyAmount] =useState("");
const [total,setTotal] = useState([]);
const [alert, setAlert] = useState({});

  const handleIncome = (e)=>{
setAmount(e.target.value)
  }

const addIncome = ()=> {
  if(amount>0){
    setIncome(+amount);
    handleAlert({type:"greenAlert",text:"Your income was added"})
  }else {
    handleAlert({type:"redAlert",text:"Your value must be bigger that zero"})
  }
  setAmount("");
}

const color = ()=> {
  if (income >= 1000){
    return "green"
  }else if (income >= 500 ){
    return "orange"
  }else if (income >=1){
    return "orange2"
  }else if(income <=0){
    return "red"
  }
  
}

const handleAmountBuy = (e)=> {
  setBuyAmount(e.target.value);

}
const handleText= (e)=> {
setText(e.target.value);
}

const together = ()=> {
  if(buyAmount>0 && text !== ""){
    if(buyAmount>income){
      handleAlert({type:"redAlert",text:"You are in minus."})
      setTotal([...total,{text,buyAmount,id:randomId()}]);
      setIncome(income-buyAmount)  
      }else if (buyAmount == income){
        setTotal([...total,{text,buyAmount,id:randomId()}]);
        handleAlert({type:"redAlert",text:"Your are on zero."})
        setIncome(income-buyAmount)  
        
    
      }else {handleAlert({type:"greenAlert",text:"Your item was added."})}
      setTotal([...total,{text,buyAmount,id:randomId()}]);
      setIncome(income-buyAmount)  
     
   
  }else{
    handleAlert({type:"redAlert",text:"Incorect text or amount. "})
  }
  
  setText("");
  setBuyAmount("");
 

  

}

const randomId = ()=> {
  return Math.random();
}


const handleAlert = ({ type, text }) => {
  setAlert({ type, text });
  setTimeout(() => {
    setAlert({});
  }, 3000);
};

const deleteItem= (id,money)=> {
const list = [...total]
const new2 = list.filter(r=>r.id !== id)
setTotal(new2)
handleAlert({type:"greenAlert",text:"Your item was deleted."})
setIncome(+income+(+money));
}
  


  return (
    <div className="full">
    
     
      
     <div className={alert.type}>{alert.text}</div>
     { income ==="" &&  <>
     <h1>What is your income this month?</h1>
     <input 
     type="number"
     value={amount}
      placeholder="your income" onChange={handleIncome}></input>
     <button onClick={addIncome}>Add</button>
     </>}
     {income !=="" && <>
    <h1> <div className={color()}>{income}$ </div>for this month</h1>
    <input type="text"value={text} onChange={handleText} placeholder="what you paying?"></input>
    <input type="number" value={buyAmount} onChange={handleAmountBuy} placeholder="for how much?"></input>
    <button onClick={together}>Add</button>
   <ul>
    {total.map(a=>{
      return(
        <li key={a.id}><span className="textLi">{a.text}</span>
        <span className="amountLi">{a.buyAmount}$</span>
        <button className="buttonLi" onClick={()=>deleteItem(a.id,a.buyAmount)}>-</button>
        </li>
      )
    })}
   </ul>
   
 

    
    
    </>}
      
      

      
    </div>
  )
}

