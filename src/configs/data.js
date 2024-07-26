import activityIcon1 from "../assets/activityIcon1.png";
import activityIcon2 from "../assets/activityIcon2.png";
import itemImage from "../assets/images/profile.png";
import pdfImage from "../assets/images/pdfImage.png";

export const attendanceSummaryData = [
  {
    text1: "Total Present",
    text2: "24",
    text3: "31 Days",
    val: 70,
    backgroundColor: "#29AB91",
    borderColor: "#29AB91",
  },

  {
    text1: "On Leaves",
    text2: "03",
    text3: "Casual",
    val: 20,
    backgroundColor: "#FFA600",
    borderColor: "#FFA600",
  },

  {
    text1: "On Absent",
    text2: "02",
    text3: "Leave",
    val: 30,
    backgroundColor: "#FF5630",
    borderColor: "#FF5630",
  },

  {
    text1: "Off Days",
    text2: "12",
    text3: "Weeks",
    val: 40,
    backgroundColor: "#377DFF",
    borderColor: "#377DFF",
  },
];

export const modifiedAttendanceSummaryData = [
  {
    text1: "Total Present",
    text2: "24",
  },
  {
    text1: "Late/Early",
    text2: "03",
  },
  {
    text1: "Half Day",
    text2: "02",
  },
  {
    text1: "Absent",
    text2: "12",
  },
  {
    text1: "OffDay/Holiday  ",
    text2: "12",
  },
  {
    text1: "On Leaves",
    text2: "12",
  },
];

export const loanRequestData = [
  {
    text1: "Total Loan Taken",
    text2: "25,000/= PKR",
  },
  {
    text1: "Total Loan Returned",
    text2: "20,000/= PKR",
  },
  {
    text1: "Total Loan Remaining",
    text2: "5,000/= PKR",
  },
];

export const activity1_Data = [
  {
    text1: "Sick Leaves",
    text2: "24",
    text3: "43%",
    backgroundColor: "#008EFF",
    borderColor: "#008EFF",
    bgColor: "#042c4d",
  },

  {
    text1: "Annual Leaves",
    text2: "70",
    text3: "30%",
    backgroundColor: "#2DD4BF",
    borderColor: "#2DD4BF",
    bgColor: "#063a33",
  },

  {
    text1: "Casual Leaves",
    text2: "20",
    text3: "90%",
    backgroundColor: "#9EC97F",
    borderColor: "#9EC97F",
    bgColor: "#294216",
  },
];

export const activity2_Data = [
  {
    text1: "Jr. Frontend Engineer",
    text2: "Spotify, Singapore  -  2 Days ago",
    image: activityIcon1,
  },

  {
    text1: "Product Designer",
    text2: "Spotify, Singapore  -  6 hours ago",
    image: activityIcon2,
  },

  {
    text1: "iOS Developer",
    text2: "San Francisco, CA  -  2 Days ago",
    image: activityIcon1,
  },

  {
    text1: "Brand Strategist",
    text2: "New york, US  -  2 Days ago",
    image: activityIcon2,
  },
];

export const event_Data = [
  {
    text1: "Mon",
    text2: "08",
    scheduledtext: "Interview",
    timetext: "9:00 am - 11:30 am",
    image: pdfImage,
  },

  {
    text1: "Tues",
    text2: "09",
    scheduledtext: "Organizational meeting",
    timetext: "9:00 am - 11:30 am",
    image: pdfImage,
  },

  {
    text1: "Wed",
    text2: "10",
    scheduledtext: "Meeting with the manager",
    timetext: "9:00 am - 11:30 am",
    image: pdfImage,
  },

  {
    text1: "Thurs",
    text2: "11",
    scheduledtext: "Meeting with the Client",
    timetext: "9:00 am - 11:30 am",
    image: pdfImage,
  },
];

export const activity3_Data = [
  {
    text1: "Senior Manager",
    text2: "Muhammad Zain ",
    image: itemImage,
  },

  {
    text1: "Junior Manager",
    text2: "Muhammad Faisal",
    image: itemImage,
  },

  {
    text1: "HR Department",
    text2: "Ramsha Sachwani",
    image: itemImage,
  },
];

// MyAttendance

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const getRandomStatus = () => {
  const statuses = [
    "On Time",
    "Off Day",
    // "Early Out",
    // "Late Coming",
    // "Half Day",
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomSource = () => {
  const sources = ["Mobile Attendance", "Web Application"];
  return sources[Math.floor(Math.random() * sources.length)];
};

const getRandomLeave = () => {
  const leaves = ["None", "Casual Leave", "Sick Leave", "Half Day Leave"];
  return leaves[Math.floor(Math.random() * leaves.length)];
};

const getRandomId = () => {
  const min = 2; // Minimum value (002)
  const max = 99; // Maximum value (99999 - 1)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const paddedNum = String(randomNum).padStart(2, "0");
  return `00${paddedNum}`;
};

const getRandomNames = () => {
  const names = ["M Hashir", "A Moiz", "Shahzaib"];
  return names[Math.floor(Math.random() * names.length)];
};

const getPayPeriodTime = () => {
  const time = ["1 - 20 May", "11 - 20 June", "11 - 29 July"];
  return time[Math.floor(Math.random() * time.length)];
};

const getRandomTotal = () => {
  const total = ["70,000/=", "80,000/=", "40,000/="];
  return total[Math.floor(Math.random() * total.length)];
};

const getRandomRemarks = () => {
  const remarks = ["Yes", "No"];
  return remarks[Math.floor(Math.random() * remarks.length)];
};

const getRandomTimes = () => {
  const time = [
    "29 May, 2024",
    "01 June, 2024",
    "02 June, 2024",
    "03 June, 2024",
  ];
  return time[Math.floor(Math.random() * time.length)];
};

const getRandomInterviewers = () => {
  const names = ["M Hashir", "A Moiz", "Shahzaib"];
  // Duplicate the array to ensure at least 2 unique names
  const duplicatedNames = names.concat(names);
  // Shuffle the array
  for (let i = duplicatedNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicatedNames[i], duplicatedNames[j]] = [
      duplicatedNames[j],
      duplicatedNames[i],
    ];
  }
  // Pick the first two names and join them with commas
  return duplicatedNames.slice(0, 2).join(", ");
};

const getRandomDate = () => {
  const year = 2024;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1; // Considering February has 28 days
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(year, month - 1, day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year}-${dayOfWeek}`;
};

export const attendanceData = Array.from({ length: 50 }, () => ({
  Date: getRandomDate(),
  CheckInTime: getRandomTime(),
  CheckOutTime: getRandomTime(),
  ShiftDuration: getRandomTime(),
  LeaveDeputation: getRandomLeave(),
  AttSource: getRandomSource(),
  HoursWorked: getRandomTime(),
  Status: getRandomStatus(),
}));

export const myattendanceColumns = [
  { name: "Date", key: "Date", styleFlag: false },
  { name: "Check In Time", key: "CheckInTime", styleFlag: false },
  { name: "Check Out Time", key: "CheckOutTime", styleFlag: false },
  { name: "Shift Duration", key: "ShiftDuration", styleFlag: false },
  { name: "Leave/Deputation", key: "LeaveDeputation", styleFlag: false },
  { name: "Att Source", key: "AttSource", styleFlag: true },
  { name: "Hours Worked", key: "HoursWorked", styleFlag: false },
  { name: "Status", key: "Status", styleFlag: true },
];

// const mergedData = attendanceData.map(dataItem => {
//   const mergedItem = {};s
//   columns.forEach(column => {
//     mergedItem[column.key] = {
//       data: dataItem[column.key],
//       styleFlag: column.styleFlag
//     };
//   });
//   return mergedItem;
// });

export const attendanceRequestColumns = [
  { name: "Request Date", key: "RequestDate", styleFlag: false },
  { name: "Type", key: "Type", styleFlag: false },
  { name: "Message", key: "Message", styleFlag: false },
  { name: "Applied Date", key: "AppliedData", styleFlag: false },
  { name: "Check in Time", key: "CheckInTime", styleFlag: false },
  { name: "Check Out Time", key: "CheckOutTime", styleFlag: false },
  { name: "Approval(s)Status", key: "ApprovalStatus", styleFlag: false },
  { name: "Action", key: "Action", styleFlag: false },
];

const getRandomType = () => {
  const types = ["As Present", "Absent"];
  return types[Math.floor(Math.random() * types.length)];
};

const getRandomStatusForAttendanceRequest = () => {
  const statuses = [
    "Disapproved",
    "Approved",
    // Add more statuses here if needed
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomstatus = () => {
  const statuses = [
    "Selected",
    "Rejected",
    // Add more statuses here if needed
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const attendanceRequestData = Array.from({ length: 5 }, () => ({
  RequestDate: getRandomDate(),
  Type: getRandomType(),
  Message: "icon",
  AppliedData: getRandomTime(),
  CheckInTime: getRandomTime(),
  CheckOutTime: getRandomTime(),
  ApprovalStatus: getRandomStatusForAttendanceRequest(),
  Action: "Two icons",
}));

// -------
export const myShiftTimeColumns = [
  { name: "S. No", key: "S.No" },
  { name: "Shift Date", key: "ShiftDate" },
  { name: "Start Time", key: "StartTime" },
  { name: "End Time", key: "EndTime" },
  { name: "Time Duration", key: "TimeDuration" },
];

export const myShiftTimeData = Array.from({ length: 30 }, (_, index) => {
  const shiftDate = `${index + 1}-Jan-2024`;
  return {
    "S.No": (index + 1).toString().padStart(2, "0"),
    ShiftDate: shiftDate,
    StartTime: "12:00PM",
    EndTime: "9:00PM",
    TimeDuration: "9:00:00",
  };
});

// -------
export const remoteRequestColumns = [
  { name: "Request Date", key: "RequestDate" },
  { name: "Request Message", key: "RequestMessage" },
  { name: "Applied Date", key: "AppliedData" },
  { name: "Approval(s)Status", key: "ApprovalStatus" },
  { name: "Action", key: "Action" },
];

export const remoteRequestData = Array.from({ length: 5 }, () => ({
  RequestDate: getRandomDate(),
  RequestMessage: "icon",
  AppliedData: getRandomTime(),
  ApprovalStatus: getRandomStatusForAttendanceRequest(),
  Action: "Two icons",
}));

////////////////leave section data ///////////////

export const leaveRequestColumns = [
  { name: "Request Date", key: "RequestDate", styleFlag: false },
  { name: "Type", key: "Type", styleFlag: false },
  { name: "Message", key: "Message", styleFlag: false },
  { name: "Attachment", key: "Attachment", styleFlag: false },
  { name: "Applied Date", key: "AppliedData", styleFlag: false },
  { name: "Approval(s)Status", key: "ApprovalStatus", styleFlag: false },
  { name: "Action", key: "Action", styleFlag: false },
];

export const leaveRequestData = Array.from({ length: 6 }, () => ({
  RequestDate: getRandomDate(),
  Type: getRandomType(),
  Message: "icon",
  Attachment: "icon",
  AppliedData: getRandomTime(),
  ApprovalStatus: getRandomStatusForAttendanceRequest(),
  Action: "Two icons",
}));

////////////////Interview section data ///////////////

export const interviewRequestColumns = [
  { name: "Ref Id", key: "RefId", styleFlag: false },
  { name: "Candidate Name", key: "CandidateName", styleFlag: false },
  { name: "Interviewers", key: "Interviewers", styleFlag: false },
  { name: "Timing", key: "Timing", styleFlag: false },
  { name: "Department", key: "Department", styleFlag: false },
  {
    name: "Interviewer's Remarks",
    key: "InterviewerRemarks",
    styleFlag: false,
  },
  { name: "Status", key: "ApprovalStatus", styleFlag: false },
  { name: "Action", key: "Action", styleFlag: false },
];

export const interviewRequestData = Array.from({ length: 6 }, () => ({
  RefId: getRandomId(),
  CandidateName: getRandomNames(),
  Interviewers: getRandomInterviewers(),
  Timing: getRandomTimes(),
  Department: "Digital Department",
  InterviewerRemarks: getRandomRemarks(),
  ApprovalStatus: getRandomstatus(),
  Action: "Two icons",
}));

// --------------
export const loanRequestColumns = [
  { name: "Type", key: "Type" },
  { name: "Message", key: "Message" },
  { name: "Amount", key: "Amount" },
  { name: "Deduction", key: "Deduction" },
  { name: "Deduction Start", key: "DeductionStart" },
  { name: "Applied Date", key: "AppliedDate" },
  { name: "Status", key: "loanStatus" },
  { name: "Approver Message", key: "ApproverMessage" },
  { name: "Action", key: "Action" },
];

export const myloanRequestData = Array.from({ length: 2 }, () => ({
  Type: "Car Loan",
  Message: "icon",
  Amount: "645000/=",
  Deduction: "40%",
  DeductionStart: "29 Dec, 2023",
  AppliedDate: "29 Dec, 2023",
  loanStatus: getRandomStatusForAttendanceRequest(),
  ApproverMessage: "Two icons",
  Action: "Two icons",
}));

////////////////Interview section data ///////////////
////////////////Payslip section data ///////////////

export const payslipsRequestColumns = [
  { name: "Ref Id", key: "RefId", styleFlag: false },
  { name: "Pay Period", key: "PayPeriod", styleFlag: false },
  { name: "Gross Salary", key: "GrossSalary", styleFlag: false },
  { name: "Extra Earning", key: "ExtraEarning", styleFlag: false },
  { name: "Total Deduction", key: "TotalDeduction", styleFlag: false },
  {
    name: "Net Salary",
    key: "NetSalary",
    styleFlag: false,
  },
  { name: "Generation Date", key: "GenerationDate", styleFlag: false },
  { name: "Salary Type", key: "SalaryType", styleFlag: false },
  { name: "Action", key: "Action", styleFlag: false },
];

export const payslipsData = Array.from({ length: 6 }, () => ({
  RefId: getRandomId(),
  PayPeriod: getPayPeriodTime(),
  GrossSalary: getRandomTotal(),
  ExtraEarning: getRandomTotal(),
  TotalDeduction: getRandomTotal(),
  NetSalary: getRandomTotal(),
  GenerationDate: getRandomTimes(),
  SalaryType: "Basic",
  Action: "Two icons",
}));

////////////////Salary section data ///////////////

export const salaryRequestColumns = [
  { name: "Request Date", key: "RequestDate" },
  { name: "Message", key: "Message" },
  { name: "Salary Amount", key: "SalaryAmount" },
  { name: "Payback Date", key: "PaybackDate" },
  { name: "Status", key: "ApprovalStatus" },
  { name: "Approver Message", key: "Message" },
  { name: "Actions", key: "Action" },
];

export const salaryRequestData = Array.from({ length: 6 }, () => ({
  RequestDate: "01-01-2024 - Mon",
  Message: "icon",
  SalaryAmount: getRandomTotal(),
  PaybackDate: getRandomTimes(),
  SalaryType: "Basic",
  Message: "icon",
  ApprovalStatus: getRandomStatusForAttendanceRequest(),
  Action: "Two icons",
}));

////////////////Reimbursement section data ///////////////

export const reimbursementRequestColumns = [
  { name: "Ref Id", key: "RefId", styleFlag: false },
  { name: "Date", key: "Date" },
  { name: "Reason", key: "Message" },
  { name: "Type", key: "Type" },
  { name: "Attachment", key: "Attachment" },
  { name: "Amount", key: "Amount" },
  { name: "Status", key: "ApprovalStatus" },
  { name: "Approver Message", key: "Message" },
  { name: "Created At", key: "CreatedAt" },
  { name: "Reimbursement", key: "Reimbursement" },
  { name: "Actions", key: "Action" },
];

export const reimbursementRequestData = Array.from({ length: 6 }, () => ({
  RefId: getRandomId(),
  Date: "01-06-2024",
  Message: "icon",
  Type: "Subscription",
  Attachment: "icon",
  Amount: getRandomTotal(),
  ApprovalStatus: getRandomStatusForAttendanceRequest(),
  Message: "icon",
  CreatedAt: "Office",
  Reimbursement: "6500/=",
  Action: "Two icons",
}));

export const reimbursementData = [
  {
    text1: "Total Reimbursement ",
    text2: "25,000/= PKR",
  },
  {
    text1: "Approved Reimbursement ",
    text2: "20,000/= PKR",
  },
  {
    text1: "Remaining Reimbursement ",
    text2: "5,000/= PKR",
  },
];

// --------

export const myMeetingsColumns = [
  { name: "Ref ID", key: "RefID" },
  { name: "Meeting Title", key: "MeetingTitle" },
  { name: "Meeting Host", key: "MeetingHost" },
  { name: "Meeting Room/Location", key: "MeetingRoom/Location" },
  { name: "Meeting Link", key: "MeetingLink" },
  { name: "Meeting Time", key: "MeetingTime" },
  { name: "Meeting Status", key: "MeetingStatus" },
  { name: "Action", key: "Action" },
];

const getRandomMyMeetingsStatus = () => {
  const statuses = [
    "Done",
    "Undone",
    // Add more statuses here if needed
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const myMeetingsData = Array.from({ length: 4 }, () => ({
  RefID: getRandomId(),
  MeetingTitle: "Create Brand",
  MeetingHost: "Abdul Moiz",
  "MeetingRoom/Location": "Room 567",
  MeetingLink: "icon",
  MeetingTime: "05:37 PM 29 Dec, 2023",
  MeetingStatus: getRandomMyMeetingsStatus(),
  Action: "Two icons",
}));

// --------

export const myHelpDeskColumns = [
  { name: "Ref ID", key: "RefID" },
  { name: "Ticket Generate By", key: "TicketGenerateBy" },
  { name: "Message", key: "Message" },
  { name: "Attachment", key: "Attachment" },
  { name: "Created At", key: "CreatedAt" },
  { name: "Status", key: "deskStatus" },
  { name: "Action", key: "Action" },
];

export const myHelpDeskData = Array.from({ length: 2 }, () => ({
  RefID: getRandomId(),
  TicketGenerateBy: "29 Dec, 2023",
  Message: "Message",
  Attachment: "Room 567",
  CreatedAt: "office",
  deskStatus: getRandomStatusForAttendanceRequest(),
  Action: "Two icons",
}));

// -------
export const randomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);
  const ampm = Math.random() < 0.5 ? "AM" : "PM";
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};

function generateRandomTime() {
  const hour = Math.floor(Math.random() * 24)
    .toString()
    .padStart(2, "0");
  const minute = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0");
  return `${hour}:${minute}`;
}

export const chatData = [
  {
    name: "John",
    description:
      "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    date: "Today",
    time: generateRandomTime(),
  },
  {
    name: "Jane",
    description: "Hi",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Alice",
    description:
      "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    date: "Today",
    time: generateRandomTime(),
  },
  {
    name: "Bob",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Hamza",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Bob",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Aqib Ali",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Shahzaib Shiekh",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "M Hashir",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  {
    name: "Abdul Moiz",
    description: "How are you?",
    date: "Yesterday",
    time: generateRandomTime(),
  },
  // Add more objects as needed
];

export const messages = [
  {
    content:
      "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-end",
  },
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content:
      "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content:
      "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content:
      "Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-end",
  },
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-start",
  },
  {
    content: "d scrambled it to make a type specimen book.",
    direction: "flex-end",
  },
];


// ------

export const taskitemThemes = [
  { backgroundColor: "#FFEBEE", borderColor: "#FF5252", textColor: "#D32F2F" },
  { backgroundColor: "#FFF3E0", borderColor: "#FFB74D", textColor: "#F57C00" },
  { backgroundColor: "#E0F7FA", borderColor: "#4DD0E1", textColor: "#00796B" },
  { backgroundColor: "#E7EEFF", borderColor: "#3366FF", textColor: "#3366FF" },
  { backgroundColor: "#F3E5F5", borderColor: "#BA68C8", textColor: "#8E24AA" },
  { backgroundColor: "#E8F5E9", borderColor: "#81C784", textColor: "#388E3C" },
  { backgroundColor: "#FFFDE7", borderColor: "#FFF176", textColor: "#FBC02D" },
  { backgroundColor: "#E0F2F1", borderColor: "#4DB6AC", textColor: "#00796B" },
  { backgroundColor: "#EDE7F6", borderColor: "#9575CD", textColor: "#512DA8" },
  { backgroundColor: "#FCE4EC", borderColor: "#F06292", textColor: "#C2185B" },
  { backgroundColor: "#F3F7E8", borderColor: "#C5E1A5", textColor: "#7CB342" },
  { backgroundColor: "#FFF8E1", borderColor: "#FFCC80", textColor: "#FFA726" },
  { backgroundColor: "#F1F8E9", borderColor: "#AED581", textColor: "#689F38" },
  { backgroundColor: "#FFF9C4", borderColor: "#FFF59D", textColor: "#FBC02D" },
  { backgroundColor: "#F3E5F5", borderColor: "#CE93D8", textColor: "#AB47BC" },
  { backgroundColor: "#E8F5E9", borderColor: "#A5D6A7", textColor: "#66BB6A" },
  { backgroundColor: "#FBE9E7", borderColor: "#FFAB91", textColor: "#D84315" },
  { backgroundColor: "#F9FBE7", borderColor: "#E6EE9C", textColor: "#AFB42B" },
  { backgroundColor: "#ECEFF1", borderColor: "#90A4AE", textColor: "#607D8B" },
  { backgroundColor: "#F5F5F5", borderColor: "#B0BEC5", textColor: "#78909C" },
];
