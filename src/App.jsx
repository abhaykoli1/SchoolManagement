import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import AddStudent from "./Pages/Student/addStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="add-student" element={<AddStudent />} />
        {/*Add New Pages */}
      </Route>
    </Routes>
  );
}

export default App;
