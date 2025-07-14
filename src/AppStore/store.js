// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./Slices/schoolSlice";
import classSectionReducer from "./Slices/classSectionSlice";
import subjectReducer from "./Slices/subjectSlice";

export const store = configureStore({
  reducer: {
    school: schoolReducer,
    classSection: classSectionReducer,
    subject: subjectReducer,
  },
});
