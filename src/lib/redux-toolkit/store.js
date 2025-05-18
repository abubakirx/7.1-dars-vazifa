import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter-slice";

console.log(1);

export const store = configureStore({
  reducer: {
    counter,
  },
});
 