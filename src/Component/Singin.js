import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      username: username,
      password: password,
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
          window.location.href = "./S1";
        }
      });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container sx={{ p: 2 }} maxWidth="sm">
      <div>
        <Typography component="h1" variant="h5">
          Singin
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt: 2 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Log in
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                type="submit"
                variant="contained"
                color="primary"
                href="/L2"
              >
                Sing up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
