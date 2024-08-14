// Widget.js
import React from "react";
import "./Widget.css";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <span>{widget.name}</span>
      <button onClick={() => onRemove(widget.id)}>Remove</button>
    </div>
  );
};

export default Widget;
