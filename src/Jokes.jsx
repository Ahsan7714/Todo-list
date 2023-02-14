import React from 'react'
import { useState } from 'react'
import "./index.css"


const  Jokes= ()=> {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const handelChange = (event) => {
    setData(event.target.value);
  };
  const addItem = () => {
    setItem([...item, data]);
  };
  return (
    <>
      <h1>To Do List</h1>
      <br></br>
      <input type="text" onChange={handelChange} />
      <button onClick={addItem}>+</button>
      <ul>
        {item.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </>
  );
}

export default Jokes
