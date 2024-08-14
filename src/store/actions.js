export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";
export const SEARCH_WIDGET = "SEARCH_WIDGET";

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, widgetId },
});

export const searchWidget = (searchTerm) => ({
  type: SEARCH_WIDGET,
  payload: searchTerm,
});
