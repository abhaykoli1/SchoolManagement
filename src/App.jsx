import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import AdminDashboard from "./Pages/Dashboard/Admin/AdminDashboard";
import TeacherDashboard from "./Pages/Dashboard/Teacher/TeacherDashboard";
import StudentDashboard from "./Pages/Dashboard/Student/StudentDashboard";
import StudentList from "./Pages/Student/StudentList/StudentList";
import AddStudent from "./Pages/Student/addStudent";
import StudentAttendance from "./Pages/Student/StudentAttendance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="admin-dashboard" replace />} />

        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="student-dashboard" element={<StudentDashboard />} />
        <Route path="student-list" element={<StudentList />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="student-attendance" element={<StudentAttendance />} />
        {/* Add New Pages */}
      </Route>
    </Routes>
  );
}

export default App;
