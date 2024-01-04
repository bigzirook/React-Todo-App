import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const HandleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={HandleDateChange} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
