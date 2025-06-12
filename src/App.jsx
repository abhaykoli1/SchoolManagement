import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import NotFound from "./Components/Layout/NotFound";
import AdminDashboard from "./Pages/Dashboard/Admin/AdminDashboard";
import StudentList from "./Pages/Student/StudentList/StudentList";
import AddStudent from "./Pages/Student/addStudent";
import StudentAttendance from "./Pages/Student/StudentAttendance";
import AddExpertTeacher from "./Pages/Teacher/AddExpertTeacher";
import ExamManagement from "./Pages/Exam/Exam-Result/ExamManagement";
import SingleResultList from "./Pages/Exam/Add-Result/SingleResultList";
import MultipleResultList from "./Pages/Exam/Add-Result/MultipleResultList";
import ClassSection from "./Pages/Class-Section/ClassSection";
import Subject from "./Pages/Subject/Subject";
import Event from "./Pages/Event/Event";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Navigate to="admin-dashboard" replace />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="student-list" element={<StudentList />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="student-attendance" element={<StudentAttendance />} />
        <Route path="add-expert-teacher" element={<AddExpertTeacher />} />
        <Route path="exam-result" element={<ExamManagement />} />
        <Route path="single-result" element={<SingleResultList />} />
        <Route path="multiple-result" element={<MultipleResultList />} />
        <Route path="classes" element={<ClassSection />} />
        <Route path="add-subject" element={<Subject />} />
                <Route path="events" element={<Event />} />
      </Route>
    </Routes>
  );
}

export default App;
