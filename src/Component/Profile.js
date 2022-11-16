import * as React from "react";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import profile from "../profile.jpg";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function ComplexGrid() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      title: title,
    };
  };
  const [title, setTitle] = React.useState("");
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 1300,
          height: "auto",
          margin: "auto",
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <Paper variant="outlined">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",

              height: "auto",
              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="ข้อมูลส่วนตัว" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Item Six" {...a11yProps(5)} />
              <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <Box
              sx={{
                m: 2,
                width: 200,
                height: 200,
                //backgroundColor: "primary.dark",
              }}
            >
              <TabPanel value={value} index={0}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    sx={{ width: 150, height: 150, m: 0 }}
                  />
                </Stack>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </TabPanel>
            </Box>

            <TabPanel value={value} index={0}>
              <TextField
                id="outlined-basic"
                label="รหัสบัตรประจำตัว"
                variant="outlined"
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="รหัสบัตรประจำตัว"
                variant="outlined"
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="รหัสบัตรประจำตัว"
                variant="outlined"
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="รหัสบัตรประจำตัว"
                variant="outlined"
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="รหัสบัตรประจำตัว"
                variant="outlined"
                sx={{ m: 1 }}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </Box>
        </Paper>
      </form>
    </Box>
  );
}
