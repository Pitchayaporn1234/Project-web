import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      position: position,
      idcard: idcard,
      title: title,
      fname: fname,
      lname: lname,
      username: username,
      phonenumber: phonenumber,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    fetch("https://www.mecallapi.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "./L1";
        }
      });
  };

  const [position, setPosition] = useState("");
  const [idcard, setIdcard] = useState("");
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ p: 5 }} maxWidth="sm">
      <div>
        <Typography component="h1" variant="h5">
          Singup
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt: 2 }} spacing={2}>
            <Grid sx={{ minWidth: 160 }} item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select">สถานะการสมัคร</InputLabel>
                  <Select
                    Complete="position"
                    labelId="demo-simple-select-label"
                    id="สถานะการสมัคร"
                    required
                    fullWidth
                    variant="outlined"
                    label="สถานะการสมัคร"
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>ผู้ดูแลระบบ</MenuItem>
                    <MenuItem value={20}>เจ้าหน้าที่</MenuItem>
                    <MenuItem value={30}>อาจารย์ประจำ</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <TextField
                Complete="idcard"
                name="รหัสบัตรประจำตัว"
                variant="outlined"
                required
                fullWidth
                id="รหัสบัตรประจำตัว"
                label="รหัสบัตรประจำตัว"
                onChange={(e) => setIdcard(e.target.value)}
                //autoFocus
              />
            </Grid>
            <Grid sx={{ minWidth: 160 }} item xs={4.5}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select">คำนำหน้า</InputLabel>
                  <Select
                    Complete="title"
                    labelId="demo-simple-select-label"
                    id="คำนำหน้า"
                    required
                    fullWidth
                    variant="outlined"
                    label="คำนำหน้า"
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>นาย</MenuItem>
                    <MenuItem value={20}>นาง</MenuItem>
                    <MenuItem value={30}>นางสาว</MenuItem>
                    <MenuItem value={40}>ดร.</MenuItem>
                    <MenuItem value={50}>ศาสตราจารย์</MenuItem>
                    <MenuItem value={60}>รองศาสตราจารย์</MenuItem>
                    <MenuItem value={70}>ผู้ช่วยศาสตราจารย์</MenuItem>
                    <MenuItem value={80}>ผู้ช่วยศาสตราจารย์ ดร.</MenuItem>
                    <MenuItem value={90}>รองศาสตราจารย์ ดร.</MenuItem>
                    <MenuItem value={100}>น.อ.ศ.</MenuItem>
                    <MenuItem value={110}>เจ้าหน้าที่</MenuItem>
                    <MenuItem value={120}>ว่าที่ร้อยตรีหญิง</MenuItem>
                    <MenuItem value={130}>อาจารย์</MenuItem>
                    <MenuItem value={140}>อาจารย์ ดร.</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3.77}>
              <TextField
                Complete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                //autoFocus
              />
            </Grid>
            <Grid item xs={3.7}>
              <TextField
                Complete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phonenumber"
                label="Phone number"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={3.5}>
              <FormControl sx={{ m: 1, width: "18ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={3.5}>
              <FormControl sx={{ m: 1, width: "18ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirmpassword
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirmpassword"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="cancel"
                fullWidth
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
