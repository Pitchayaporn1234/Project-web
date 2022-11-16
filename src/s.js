import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: "block" }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "default" },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
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
                      <Tooltip title="ModeEditSharp">
                        <IconButton>
                          <ModeEditSharpIcon
                            onClick={handleClick}
                            onDelete={handleDelete}
                            deleteIcon={<DeleteIcon />}
                            variant="outlined"
                          />
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
