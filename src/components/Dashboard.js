// src/components/Dashboard.js
import React from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category"; 
import "./Dashboard.css";// Make sure this path is correct

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard">
      {filteredCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
