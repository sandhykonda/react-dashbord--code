import React, { useState } from "react";
import "./AddWidgetForm.css";

const AddWidgetForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      const newWidget = { id: Date.now(), name, text };
      onAdd(newWidget);
      setName("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
