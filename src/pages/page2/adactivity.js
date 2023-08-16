import React, { useState } from 'react';
import './activity.css';
import Header from '../../components/Header/Header';
import 'font-awesome/css/font-awesome.min.css';


function Activity() {
  const [toDos, settoDOs] = useState([]);
  const [toDo, settoDO] = useState('');

  return (
    <div className="activityContainer">
    <Header />
    <div className="app">
    
      <div className="activity-content">
        <div className="mainHeading">
         
        </div>
        <div className="subHeading">
          <br />
          <h2>Lets Do Something 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={toDo}
            onChange={(event) => settoDO(event.target.value)}
            placeholder="🖊️ Add item..."
          />
       <i
  onClick={() => {
    settoDOs([
      ...toDos,
      { id: Date.now(), text: toDo, status: false },
    ]);
    settoDO('');
  }}
  className="fa fa-plus"
></i>

        </div>
        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(event) => {
                      settoDOs(
                        toDos.map((obj2) =>
                          obj2.id === obj.id ? { ...obj2, status: event.target.checked } : obj2
                        )
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>

                <div className="right">
                  <i
                    onClick={() => {
                      if (obj.status) {
                        settoDOs(toDos.filter((obj2) => obj2.id !== obj.id));
                      }
                    }}
                    className="class=fa fa-trash-o" aria-hidden="true"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Activity;
