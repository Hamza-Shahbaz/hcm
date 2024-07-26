import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/dashoard/Dashboard";
import drawerRoutes from "./drawerRoutes";
import DrawerMainlayout from "../pages/DrawerMainlayout";
import MyAttendance from "../pages/attendance/MyAttendance";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DrawerMainlayout />}>
        {drawerRoutes}
      </Route>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/my-attendance" element={<MyAttendance />} /> */}
    </Routes>
  );
};

export default Routing;
