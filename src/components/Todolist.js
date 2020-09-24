import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map((todo) => {
          return (
            <div className="collection-item" key={todo.id}>
              <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
            </div>
          );
        })
      ) : (
        <p className="center">You have no todo's item....so enjoy!!!</p>
      )}
    </div>
  );
}

export default TodoList;
