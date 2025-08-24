import { AiFillDelete } from "react-icons/ai";

function TodoItem({todoName, todoDate, onDeleteClick}) {
  return (
    <div className="container">
      <div className="row Hs-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger hs-button"
          onClick={() => onDeleteClick(todoName)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
