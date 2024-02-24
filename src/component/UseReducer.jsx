import React, { useReducer } from "react";
// import { useState } from "react";
import "../usage.css"
import valueReducer, {TYPE} from "../reducers/valueReducer"

// const valueReducer= (state, action) => {
  // if(action === "increment"){
  //   return state + 1;
  // } else if (action === "decrement") {
  //   return state - 1;
  // }
  // return 1;
//   return state + action ;
// };

const initialState = {
    count : 0,
    color: "white"
  
}
const UseReducer = () => {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("white")
  const [state, dispatch] =useReducer(valueReducer, initialState)
  return (
    <div className="usage"> 
    <div className="usage-item" style={{background : state.color}}>
      <button 
      className="btn btn-outline-secondary"
       onClick={() => 
      //  setCount(count + 1)
       dispatch({type:TYPE.CHANGE_VALUE,payload:1})
       }
       >
        Increment
      </button>
      <label htmlFor="">{state.count}</label>

      <button 
      className="btn btn-outline-secondary"
       onClick={() => 
      //  setCount(count - 1)
      dispatch({type:TYPE.CHANGE_VALUE,payload:-1})
       }
       >
        Decrement
      </button>
    </div>
    <button onClick={() =>
      //  setColor("green")
      dispatch({type:TYPE.CHANGE_COLOR,payload:"green"})

       }> Green</button>
    <button onClick={() =>
    //  setColor("blue")
    dispatch({type:TYPE.CHANGE_COLOR,payload:"blue"})

  }> Blue </button>
    </div>
  );
};

export default UseReducer;
