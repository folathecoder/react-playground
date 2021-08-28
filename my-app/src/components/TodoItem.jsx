import React from "react";

function TodoItem(prop) {
  return (
    <div>
      <div className="list">
        <input type="checkbox" name="check" id="check" />
        <span>Learn react js</span>
      </div>
    </div>
  );
}

export default TodoItem;
