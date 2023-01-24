import "./Tasks.scss";
import TasksData from "./TasksData";

export const Tasks = () => {
  // const handleSubmit() => {

  // }

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
      <form className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Create new task"
        />
        <button className="form__plus">
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>

      {TasksData.map((task) => (
        <li className="list d-flex align-items-center">
          <input
            className="form-check-input"
            onChange={task.isCompleted}
            type="checkbox"
          />
          <span className="ms-3">{task.text}</span>
          <button className="btn btn-warning p-1 rounded ms-auto text-white">{task.isTime}</button>
        </li>
      ))}
    </div>
  );
};
