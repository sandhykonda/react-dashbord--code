import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import { useDispatch } from "react-redux";
import { addWidget, removeWidget } from "../store/actions";
import "./Category.css";
const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleAddWidget = (widget) => {
    dispatch(addWidget(category.id, widget));
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.id, widgetId));
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={handleRemoveWidget}
          />
        ))}
      </div>
      <AddWidgetForm onAdd={handleAddWidget} />
    </div>
  );
};

export default Category; // Ensure you are using default export here
