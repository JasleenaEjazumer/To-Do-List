import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos,settoDOs]= useState([])
  const [toDo,settoDO]= useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Lets Do Something 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text"  value={toDo} onChange={(event)=>settoDO(event.target.value)} placeholder="🖊️ Add item..." />
        <i  onClick={()=>{settoDOs([...toDos,{id:Date.now(),text:toDo,status:false}]);
      settoDO('');
      }} className="fas fa-plus"></i> 
      </div>
      <div className="todos">
        {toDos.map((obj)=>{
          return(<div className="todo">
          <div className="left">
            <input onChange={(event)=>{
             
                settoDOs(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=event.target.checked
                  }
                  return obj2

                }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          
          <div className="right">
            <i onClick={()=>{
              if(obj.status){
                settoDOs(toDos.filter((obj2) => obj2.id !== obj.id));
              }
            }}
            className="fas fa-times"></i>
        </div>
      </div>
    );
  })} </div>
    </div>
  );
}


export default App;