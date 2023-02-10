import React from 'react'
import { useState } from 'react'
import "./index.css"


const  Jokes= ()=> {
  const[item,setItem]=useState("");
  const[add,setadd]=useState([]);
  const addItem=(event)=>{
    setItem(event.target.value);
  }  
  const  listOfItems =()=>{

  }
  return(<>
  <div className="main-div">
    <div className="center-div">
      <br></br>
      <h1>ToDo List</h1>
      <br></br>
      <input type="text" placeholder='Add items' onChange={addItem}/>
      <button>+</button>
      <br></br>
      <ol>
        <li>{item}</li>
        {}
      </ol>
    </div>

  </div>
  </>

  )
}

export default Jokes