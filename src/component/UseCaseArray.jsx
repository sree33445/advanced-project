import React, { useState } from 'react'
import {data} from "../data";

const UseCaseArray = () => {
    const [people, setPeople]= useState(data);

    const removeItem = (id) =>{
        let newData = people.filter((person)=>person.id !==id)
        setPeople(newData)
    }
  return (
    <div>
        {people.map((singleData)=>{     
        return(
        <div key={singleData.id} className="card align-items-center">
            <div className="card-body">{singleData.name}</div>
            <footer>
                <button onClick={()=>removeItem(singleData.id)} className='btn btn-outline-danger'>Remove me</button>
            </footer>
            </div>
        );
        })}    
        <button onClick={()=> setPeople([])} className='btn btn-outline-primary'>clear all</button>
        <button onClick={()=> setPeople(data)}>Refresh</button>
        </div>    
  );
};

export default UseCaseArray
