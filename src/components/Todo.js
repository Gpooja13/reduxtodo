import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  console.log(list.data);
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add your List here.</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Add items"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            onClick={() => {
              dispatch(addTodo(inputData));
              setInputData("");
            }}
          ></i>
        </div>
        <div className="showItem">
          {list.map((val) => {
            return (
              <div className="eachItem" key={val.id}>
                <h3>{val.data}</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  onClick={() => dispatch(deleteTodo(val.id))}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="showItem">
            <button onClick={()=>dispatch(removeTodo())}>Remove All</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
