import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  // const handleAddButtonClicked = () => {
  const handleAddButtonClicked = (event) => {

    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");

    // console.log(event);
  };

  // form ke andar ka jo button hota h woh by default submit hota h

  return (
    <div className="container text-center">
      {/* <div className="row Hs-row"> */}
      <form className="row Hs-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success hs-button"
            // onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}

export default AddTodo;
