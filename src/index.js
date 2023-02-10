import React from "react";
import  ReactDOM  from "react-dom";
import Jokes from "./Jokes";


   
function App(){
  return(
    <Jokes/>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"))
