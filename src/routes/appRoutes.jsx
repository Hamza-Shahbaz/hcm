import React from "react";
// import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
// import HomePage from "../pages/home/HomePage";
// import DefaultPage from "../pages/dashboard/DefaultPage";
// import DashboardIndex from "../pages/dashboard/DashboardIndex";
// import ChangelogPage from "../pages/changelog/ChangelogPage";
// import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
// import SaasPage from "../pages/dashboard/SaasPage";
// import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Dashboard from "../pages/dashoard/Dashboard";
import MyAttendance from "../pages/attendance/MyAttendance";
import AttendanceRequest from "../pages/attendance/AttendanceRequest";
import MyShift from "../pages/attendance/MyShift";
import MyRemoteWorkRequest from "../pages/attendance/MyRemoteWorkRequest";
import PageLayout from "./PageLayout";
import MyLeaveRequests from "../pages/leave/MyLeaveRequests";
import MyInterview from "../pages/recruitment/MyInterview";
import MyLoanRequest from "../pages/loan/MyLoanRequest";
import MyPayslips from "../pages/payroll/MyPayslips";
import MySalaryRequest from "../pages/payroll/MySalaryRequest";
import MyReimbursementRequest from "../pages/payroll/MyReimbursementRequest";
import MyMeetings from "../pages/others/MyMeetings";
import MyResignation from "../pages/others/MyResignation";
import MyHelpDesk from "../pages/others/MyHelpDesk";
import Chatting from "../pages/chatting/Chatting";
import MySchedule from "../pages/myschedule/MySchedule";
import MobileApp from "../pages/projects/MobileApp";
// import Login from "../pages/Login";

const appRoutes = [
  {
    index: true,
    // element: <Login />,
    state: "home",
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },

  {
    path: "/attendance",
    element: <PageLayout />,
    state: "attendance",
    sidebarProps: {
      displayText: "Attendance",
      icon: <FileDownloadOutlinedIcon />,
    },
    child: [
      {
        index: true,
        // element: <DashboardIndex />,s
        // state: "installation.index",
      },
      {
        path: "/attendance/my-attendance",
        element: <MyAttendance />,
        state: "attendance.myAttendance",
        sidebarProps: {
          displayText: "My Attendance",
        },
      },
      {
        path: "/attendance/attendance-request",
        element: <AttendanceRequest />,
        state: "attendance.attendanceRequest",
        sidebarProps: {
          displayText: "Attendance Request",
        },
      },
      {
        path: "/attendance/my-shift",
        element: <MyShift />,
        state: "attendance.myShift",
        sidebarProps: {
          displayText: "My Shift Time",
        },
      },
      {
        path: "/attendance/remote-work-request",
        element: <MyRemoteWorkRequest />,
        state: "attendance.remoteWorkRequest",
        sidebarProps: {
          displayText: "Remote Work Request",
        },
      },
    ],
  },

  {
    path: "/leave",
    element: <PageLayout />,
    state: "leave",
    sidebarProps: {
      displayText: "Leave",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/leave/my-leaves",
        element: <MyLeaveRequests />,
        state: "leave.my-leaves-request",
        sidebarProps: {
          displayText: "My Leave Requests",
        },
      },
    ],
  },

  {
    path: "/recruitment",
    element: <PageLayout />,
    state: "recruitment",
    sidebarProps: {
      displayText: "Recruitment",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/recruitment/my-interviews",
        element: <MyInterview />,
        state: "recruitment.my-interviews",
        sidebarProps: {
          displayText: "My Interviews",
        },
      },
    ],
  },

  {
    path: "/payroll",
    element: <PageLayout />,
    state: "payroll",
    sidebarProps: {
      displayText: "Payroll",
      icon: <FormatListBulletedOutlinedIcon />,
    },
    child: [
      {
        path: "/payroll/payslips",
        element: <MyPayslips />,
        state: "payroll.payslips",
        sidebarProps: {
          displayText: "My Payslips",
        },
      },

      {
        path: "/payroll/salary-request",
        element: <MySalaryRequest />,
        state: "payroll.salary-request",
        sidebarProps: {
          displayText: "My Salary Request",
        },
      },

      {
        path: "/payroll/reimbursement-request",
        element: <MyReimbursementRequest />,
        state: "payroll.reimbursement-request",
        sidebarProps: {
          displayText: "Reimbursement Request",
        },
      },
    ],
  },

  {
    path: "/loan",
    element: <PageLayout />,
    state: "loan",
    sidebarProps: {
      displayText: "Loan",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/loan/my-loan-request",
        element: <MyLoanRequest />,
        state: "loan.myLoanRequest",
        sidebarProps: {
          displayText: "My Loan Request",
        },
      },
    ],
  },

  {
    path: "/others",
    element: <PageLayout />,
    state: "others",
    sidebarProps: {
      displayText: "Others",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/others/my-meetings",
        element: <MyMeetings />,
        state: "others.myMeetings",
        sidebarProps: {
          displayText: "My Meetings",
        },
      },
      {
        path: "/others/my-resignation",
        element: <MyResignation />,
        state: "others.myResignation",
        sidebarProps: {
          displayText: "My Resignation",
        },
      },
      {
        path: "/others/my-help-desk",
        element: <MyHelpDesk />,
        state: "others.myHelpDesk",
        sidebarProps: {
          displayText: "My Help Desk",
        },
      },
    ],
  },

  {
    path: "/chatting",
    element: <Chatting />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Chatting",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/my-schedule",
    element: <MySchedule />,
    state: "myschedule",
    sidebarProps: {
      displayText: "My Schedule",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/projects",
    element: <PageLayout />,
    state: "projects",
    sidebarProps: {
      displayText: "Projects",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/projects/mobile-app",
        element: <MobileApp />,
        state: "projects.mobileApp",
        sidebarProps: {
          displayText: "Mobile App",
        },
      },
    ],
  },
];

export default appRoutes;
