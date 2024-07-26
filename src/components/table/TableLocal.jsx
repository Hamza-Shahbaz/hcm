import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import offday from "../../assets/images/offday.png";
import ontime from "../../assets/images/ontime.png";
import filterIcon from "../../assets/images/filterIcon.png";
import Search from "../text/Search";
import TableItem from "./TableItem";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EDEDED",
    // backgroundColor: theme.palette.common.black,
    color: "black",
    fontSize: 16,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    backgroundColor: "",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  // "&:last-of-type": {
  //   backgroundColor:   "#EDEDED",
  //   // color: "yellow",
  //   padding: 10,
  // },
}));

const attSourceTypeBgColor = {
  web: "#6576DE",
  mobile: "#2BAE60",
  approved: "#25BC58",
  notApproved: "#EB4A4A",
};

// Replace this rows constant with your attendanceDat

const statusInfo = {
  "Off Day": { status: offday, color: "#F6C549" },
  "On Time": { status: ontime, color: "#2BA58D" },
};

export default function TableLocal({ columns, data, bottomHours , onClick}) {
  return (
    <Box
      sx={{
        backgroundColor: "",
        mx: 3,
        my: 3,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "",
          overflowX: "auto",
          width: "100%",
          boxShadow: "-1px 1px 3px 3px rgba(235,227,227,0.88)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "",
            marginY: 2,
            marginLeft: -1.5,
            marginRight: 2,
          }}
        >
          <Search />
          <Box>
            <img src={filterIcon} style={{ width: "30px", cursor: 'pointer' }} onClick={onClick}/>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "", px: 1 }}>
          <Table
            sx={{
              border: `3px solid #fff`,
              backgroundColor: "",
              marginY: 1,
            }}
            aria-label="customized table"
          >
            <TableHead sx={{ backgroundColor: "" }}>
              <TableRow>
                {columns?.map((column, index) => (
                  <StyledTableCell align="center" key={index}>
                    {column.name}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, dataIndex) => (
                <>
                  <StyledTableRow key={dataIndex}>
                    {columns.map((column, index) => (
                      <>
                        <TableItem
                          lastRow={data.length - 1}
                          index={dataIndex}
                          row={row}
                          column={column}
                          StyledTableCell={StyledTableCell}
                          StyledTableRow={StyledTableRow}
                          attSourceTypeBgColor={attSourceTypeBgColor}
                          statusInfo={statusInfo}
                  
                        />
                      </>
                    ))}
                  </StyledTableRow>
                </>
              ))}
              {bottomHours && (
                <StyledTableRow
                  sx={{
                    "&:last-of-type": {
                      backgroundColor: bottomHours ? "#EDEDED" : "transparent",
                    },
                  }}
                >
                  <StyledTableCell component="th" scope="row"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">171:00:00</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">151:00:00</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Box>
  );
}
