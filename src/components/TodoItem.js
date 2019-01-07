import React from "react";

export default function TodoItem(props) {
  let { title, completed } = props.todo;
  return (
    <div>
      <h1>{title} </h1>
    </div>
  );
}
