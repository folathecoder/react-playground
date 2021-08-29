import React from "react";

function TodoItem(prop) {
  return (
    <div>
      <div className = "list" id = "{prop.key}">
        <input type="checkbox" name="check" id="check" checked = {prop.completed}/>
        <span>{prop.text}</span>
      </div>
    </div>
  );
}

export default TodoItem;
