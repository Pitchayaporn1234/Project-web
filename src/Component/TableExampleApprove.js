import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RefreshIcon from "@mui/icons-material/Refresh";
import "../Css/TableExampleApprove.css";
import { Link } from "react-router-dom";
//import Link from "@material-ui/core";
//import { pdf } from "./statement";

const handlePrint = () => {
  window.print();
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(number, semester, fat, carbs, protein) {
  return { number, semester, fat, carbs, protein };
}

const rows = [createData(1, 2565, 6.0, 24, 4.0)];

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

export default function TableExampleApprove() {
  return (
    <Paper sx={{ maxWidth: 1450, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs></Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }} href="./R1">
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: "block" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow className="table">
                <StyledTableCell>ลำดับที่</StyledTableCell>
                <StyledTableCell>ภาคเรียน/ปีการศึกษา&nbsp;</StyledTableCell>
                <StyledTableCell>ช่วงวันที่งดสอน&nbsp;</StyledTableCell>
                <StyledTableCell>เหตุที่ไม่ได้สอน&nbsp;</StyledTableCell>
                <StyledTableCell>วันที่สอนแทน</StyledTableCell>
                <StyledTableCell>วิชาที่ให้สอนแทน</StyledTableCell>
                <StyledTableCell>อาจารย์ที่ให้สอนแทน&nbsp;</StyledTableCell>
                <StyledTableCell>พิมพ์ใบสอนแทน&nbsp;</StyledTableCell>
                <StyledTableCell>จัดการ&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.number}</StyledTableCell>
                  <StyledTableCell>{row.semester}</StyledTableCell>
                  <StyledTableCell>{row.fat}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.protein}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      onClick={handlePrint}
                      //href={pdf}
                      download
                    >
                      PDF
                    </Button>
                    &nbsp;
                    <Button variant="contained" href="#contained-buttons">
                      EXCEL
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="ModeEditSharp" component={Link} to="/R1">
                        <IconButton>
                          <ModeEditSharpIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </Paper>
  );
}
