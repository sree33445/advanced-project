import React, { useState } from 'react'

const Starter = () => {
  const [title, setTitle]= useState("React Tutorial");
  const [number, setNumber]= useState(0);
  function change3(){
    if (title==="React Tutorial") {
      
    setTitle("React New tutorial")
    }
    else{
      setTitle("React Tutorial")
    }
}
  function change(){
      setNumber(number+1)
  }
  function change1(){
    setNumber(number-1)
}
function change2(){
  setNumber(0)
}
  return (
    <div>
      Starter Component
      <h3>{number}</h3>
      <h3>{title}</h3>
      <button onClick={change3}>click to change</button>
      <br />
      <br />
      <button onClick={change}>Increment</button>
      <button onClick={change1}>Decrement</button>
      <br />
      <br />
      <button onClick={change2}>Reset</button>
      </div>
  );
}

export default Starter
