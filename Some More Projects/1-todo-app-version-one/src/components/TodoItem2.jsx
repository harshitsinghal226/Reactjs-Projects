function TodoItem2() {

    let todoName = "Go to College";
    let todoDate = "29/3/2025";

  return (
    <div class="container">
      <div class="row Hs-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger hs-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
