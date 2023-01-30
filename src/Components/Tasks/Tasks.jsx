import "./Tasks.scss";
import TasksData from "./TasksData";
import { useRef, useState } from "react";

export const Tasks = () => {
  let [todos, setTodos] = useState([]);
  // let [modal, setModal] = useState('');
  let [closest, setClosest] = useState(true)
  let [modal, setModal] = useState([]);
  let [modalClass, setModalClass] = useState([]);

  const handleOpenModal = () => {
    
  }

  const handleButtonId = (evt) => {
    const todoId = evt.target.dataset.todoId;
    const foundIndex = TasksData.find((task) => task.id == todoId)
    setModal(foundIndex.text) 
    setModalClass(foundIndex.class)
  } 

  const handleTodo = (evt) => {
    evt.preventDefault();
    setTodos([
      {
        id: todos.at(-1)?.id + 1 || 1,
        text: inputVal.current.value,
        isCompleted: false,
        isModal: modal,
        isClass: modalClass
      },
      ...todos,
    ])
  }

  let inputVal = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!inputVal.current.value) {
      return false;
    }

    //* Clears the input
    setClosest(false)
    // inputVal.current.value = ''
  };

  return (
    <div className="topper">
      <div className="wrapper">
        <div className="inner__wrapper">
          <h2 className="wrapper__title">Tasks</h2>
          <p className="wrapper__text">Today</p>
        </div>
        <a className="wrapper__link" href="./index.jsx">
          View all
        </a>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          ref={inputVal}
          className="form__input"
          type="text"
          placeholder="Create new task"
        />
        <button onClick={handleOpenModal} className="form__plus">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>

      {todos.map((task) => (
        <li className="list d-flex align-items-center" key={task.id}>
          <input
            className="form-check-input"
            onChange={task.isCompleted}
            type="checkbox"
          />
          <span className="ResolveList__Item ms-3">{task.text}</span>
          <button className={task.isClass}>
            {task.isModal} 
          </button>
        </li>
      ))}

      <form className={closest ? 'd-none' : ''} onSubmit={handleSubmit}>
      <div className="NewModal shadow-lg ">
      <h4 className="text-center">Select status</h4>
      <div className="NewModal__buttons">
            {
              TasksData.map((task) => <div className="NewModal__buttons" key={task.id}>
                <button onClick={handleButtonId} data-todo-id={task.id} type="submit" className={task.class}>{task.text}</button>
              </div>)
            }
      </div>
      <button onClick={handleTodo} type="submit" className="mt-2 btn btn-light  w-100">
        <span className="fa-solid fa-plus icon"></span>
      </button>
    </div>
    </form>
    </div>
  );
};
