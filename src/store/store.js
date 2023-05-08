import { configureStore } from "@reduxjs/toolkit";
import todos from "../reducers/todos";

export const store = configureStore({
  reducer: {
    todos:todos,
  },
})