import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGET } from "./actions";
import initialData from "../data.json";

const initialState = {
  categories: initialData.categories,
  searchTerm: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    case SEARCH_WIDGET:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
