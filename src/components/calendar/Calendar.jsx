import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../themes/themePalette";
import TaskItem from "./TaskItem";
import TaskStatus from "../../pages/myschedule/TaskStatus";
import Reminders from "../../pages/myschedule/Reminders";
import AddTask from "./AddTask";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px" backgroundColor={"gren"} width={"100%"}>
      <Box
        backgroundColor={"yell"}
        display="flex"
        justifyContent="space-between"
      >
        {/* CALENDAR */}
        <Box flex="3" ml="15px">
          <FullCalendar
            dayCellClassNames={"dayCell"}
            dayHeaderClassNames={"dayHeader"}
            viewClassNames={"view"}
            height="100vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            allDaySlot={false}
            dayHeaders={true}
            headerToolbar={{
              // left: "prev,next today",
              // right: "title",
              // right: "dayGridMonth,timeGridWeek,timeGridDay",
              left: null,
              center: null,
              right: null,
            }}
            // dayHeaderContent={() => {
            //   return <Box>Reder</Box>;
            // }}

            initialView="dayGridMonth"
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            eventContent={(event) => {
              return <TaskItem title={event.event.title} />;
            }}
            initialEvents={[
              {
                id: "9",
                title: "Software Development Conference",
                date: "2024-05-02",
              },
              {
                id: "10",
                title: "Tech Meetup: Latest Trends in Development",
                date: "2024-05-08",
              },
              {
                id: "11",
                title: "Coding Bootcamp",
                date: "2024-05-18",
              },
              {
                id: "12",
                title: "Hackathon: Solving Real-World Problems",
                date: "2024-05-22",
              },
              {
                id: "13",
                title: "DevOps Workshop",
                date: "2024-05-24",
              },
              {
                id: "14",
                title: "Webinar: Frontend Frameworks Comparison",
                date: "2024-05-26",
              },
              {
                id: "15",
                title: "API Design Seminar",
                date: "2024-05-30",
              },
              {
                id: "15",
                title: "API Design Seminar",
                date: "2024-06-06",
              },
            ]}
          />
        </Box>

        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1"
          backgroundColor={"#F6F6F6"}
          // backgroundColor={"d"}
          mx={4}
          my="15px"
          display={"flex"}
          flexDirection={"column"}
          // justifyContent={"flex-end"}
          borderRadius={4}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                mx: 3,
                // my:0,
                // "& .MuiDateCalendar-root": {
                //   maxHeight: 300,
                //   width:1000,
                //   backgroundColor: "red",
                // },
                "& .MuiPickersArrowSwitcher-root": {
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #AFB8CF",
                  overflow: "hidden",
                  height: "30px",
                  // width:"30px"
                },
                "& .MuiPickersArrowSwitcher-button:hover": {
                  backgroundColor: "#44C9BC",
                },
                "& .MuiButtonBase-root": {
                  // backgroundColor: "white",
                  borderRadius: 0.1,
                },
                "& .MuiSvgIcon-root": {
                  // backgroundColor: "white",

                  width: "15px",
                },
                "& .MuiDayCalendar-monthContainer": {
                  // Add your custom styles heres
                  backgroundColor: "white",
                },
                "& .MuiDayCalendar-root": {
                  // Add your custom styles heres
                  backgroundColor: "white",
                  borderRadius: 4,
                },

                "& .MuiDayCalendar-weekDayLabel": {
                  color: "#3D64FD",
                  fontWeight: 500,
                  fontSize: 11,

                  backgroundColor: "rd",
                  mt: 1,
                  width: "30px",
                  height: "30px",
                },
                "& .MuiPickersDay-root": {
                  // Add your custom styles heres
                  backgroundColor: "Orage",
                  width: "30px",
                  height: "30px",
                  fontWeight: 300,
                  fontSize: 11,
                },
                "& .MuiDayCalendar-slideTransition": {
                  backgroundColor: "yellw",
                  minHeight: 200,
                },
                "& .css-vtxn4y-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
                  {
                    backgroundColor: "#F25D5A",
                    border: "none",
                    color: "white",
                    // fontWeight: 400,
                    borderRadius: 24,
                    fontSize: 11,
                  },
                // "& .MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                //   backgroundColor: "orage",
                //   width: "30px",
                //   height: "30px",
                // },
              }}
            />
          </LocalizationProvider>
          <AddTask />
          <Box display="flex" justifyContent="space-around">
            <TaskStatus
              title="Your Best Month"
              month="March"
              themeColor="light"
              type={1}
            />
            <TaskStatus
              title="Active Project"
              month="April"
              themeColor="dark"
              type={2}
            />
          </Box>
          <Reminders />

          {/* <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
