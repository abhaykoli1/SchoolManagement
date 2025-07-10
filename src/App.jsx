import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts & Wrappers
import Layout from "./Components/Layout/layout";
import NotFound from "./Components/Layout/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

// Dashboard & Auth
import AdminDashboard from "./Pages/Dashboard/Admin/AdminDashboard";
import LoginForm from "./Pages/Users/LoginForm";
import SignupForm from "./Pages/Users/SignupForm";

// Student Pages
import StudentList from "./Pages/Student/StudentList/StudentList";
import AddStudent from "./Pages/Student/addStudent";
import StudentAttendance from "./Pages/Student/StudentAttendance";

// Teacher & Exam
import AddExpertTeacher from "./Pages/Teacher/AddExpertTeacher";
import ExamManagement from "./Pages/Exam/Exam-Result/ExamManagement";
import SingleResultList from "./Pages/Exam/Add-Result/SingleResultList";
import MultipleResultList from "./Pages/Exam/Add-Result/MultipleResultList";

// Classes & Subject
import ClassSection from "./Pages/Class-Section/ClassSection";
import Subject from "./Pages/Subject/Subject";

// Other Modules
import Event from "./Pages/Event/Event";
import Assignment from "./Pages/Assignment/Assignment";
import Library from "./Pages/Library/Blibrary";
import Transportmanagement from "./Pages/Transportmanagement/Transportmanagement";
import Feesmanagement from "./Pages/Feesmanagement/Feesmanagement";
import Hostelmanagement from "./Pages/Hostelmanagement/Hostelmanagement";
import Inventorymanagement from "./Pages/Inventorymanagement/Inventorymanagement";
import Parentportal from "./Pages/Parentportal/Parentportal";
import Onlineadmission from "./Pages/Onlineadmission/Onlineadmission";
import AttendanceManagement from "./Pages/Attendance/AttendanceManagement";
import New from "./Components/New";

function App() {
  return (
    <Routes>
      {/* 🔐 Private Routes */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="admin-dashboard" />} />
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
        <Route
          path="attendance-management"
          element={<AttendanceManagement />}
        />
        <Route path="new" element={<New />} />
        <Route path="home-assignment" element={<Assignment />} />
        <Route path="bock-library" element={<Library />} />
        <Route path="transport-management" element={<Transportmanagement />} />
        <Route path="fees" element={<Feesmanagement />} />
        <Route path="hostel-management" element={<Hostelmanagement />} />
        <Route path="inventory-management" element={<Inventorymanagement />} />
        <Route path="Parent-portal" element={<Parentportal />} />
        <Route path="Online-Admission" element={<Onlineadmission />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* </Route> */}

      {/* 🔓 Public Routes */}
      {/* <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Route> */}
    </Routes>
  );
}

export default App;
