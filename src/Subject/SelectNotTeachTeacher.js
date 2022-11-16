import { Subject } from "@mui/icons-material";
import React, { Component, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import APIService from "../SelectSubjectAPIService";

export default class SelectNotTeachTeacher extends Subject {
  componentDidMount() {}

  render() {
    return (
      <div className="selectsubject">
        <Selection />
      </div>
    );
  }
}

function Selection() {
  const dayOfWeekOptions = [
    { key: "0", value: "0", text: "Sunday" },
    { key: "1", value: "1", text: "Monday" },
    { key: "2", value: "2", text: "Tuesday" },
    { key: "3", value: "3", text: "Wednesday" },
    { key: "4", value: "4", text: "Thursday" },
    { key: "5", value: "5", text: "Friday" },
    { key: "6", value: "6", text: "Saturday" },
  ];

  const timeStartOptions = [
    { key: "08:00", value: "08:00:00", text: "08:00" },
    { key: "09:00", value: "09:00:00", text: "09:00" },
    { key: "10:00", value: "10:00:00", text: "10:00" },
    { key: "11:00", value: "11:00:00", text: "11:00" },
    { key: "12:00", value: "12:00:00", text: "12:00" },
    { key: "13:00", value: "13:00:00", text: "13:00" },
    { key: "14:00", value: "14:00:00", text: "14:00" },
    { key: "15:00", value: "15:00:00", text: "15:00" },
    { key: "16:00", value: "16:00:00", text: "16:00" },
    { key: "17:00", value: "17:00:00", text: "17:00" },
    { key: "18:00", value: "18:00:00", text: "18:00" },
    { key: "19:00", value: "19:00:00", text: "19:00" },
    { key: "20:00", value: "20:00:00", text: "20:00" },
    { key: "21:00", value: "21:00:00", text: "21:00" },
    { key: "22:00", value: "22:00:00", text: "22:00" },
  ];

  const timeEndOptions = [
    { key: "08:00", value: "08:00:00", text: "08:00" },
    { key: "09:00", value: "09:00:00", text: "09:00" },
    { key: "10:00", value: "10:00:00", text: "10:00" },
    { key: "11:00", value: "11:00:00", text: "11:00" },
    { key: "12:00", value: "12:00:00", text: "12:00" },
    { key: "13:00", value: "13:00:00", text: "13:00" },
    { key: "14:00", value: "14:00:00", text: "14:00" },
    { key: "15:00", value: "15:00:00", text: "15:00" },
    { key: "16:00", value: "16:00:00", text: "16:00" },
    { key: "17:00", value: "17:00:00", text: "17:00" },
    { key: "18:00", value: "18:00:00", text: "18:00" },
    { key: "19:00", value: "19:00:00", text: "19:00" },
    { key: "20:00", value: "20:00:00", text: "20:00" },
    { key: "21:00", value: "21:00:00", text: "21:00" },
    { key: "22:00", value: "22:00:00", text: "22:00" },
  ];

  const getyear = () => {
    //example
    var time = Date().getLocal;

    if (time > 5) {
      return "1";
    }
  };

  const [selectedDayOfWeekOption, setDayOfWeekOptions] = useState(getyear);
  const [selectedTimeStartOption, setTimeStartOptions] = useState(null);
  const [selectedTimeEndOption, setTimeEndOptions] = useState(null);

  const handleChangeDayOfWeek = (event, { value }) => {
    setDayOfWeekOptions(value);
  };

  const handleChangeTimeStart = (event, { value }) => {
    setTimeStartOptions(value);
  };

  const handleChangeTimeEnd = (event, { value }) => {
    setTimeEndOptions(value);
  };

  const handleSubmit = (event, data) => {
    console.log(selectedDayOfWeekOption);
    console.log(selectedTimeStartOption);
    console.log(selectedTimeEndOption);
    APIService.createNotTeaching(
      selectedDayOfWeekOption,
      selectedTimeStartOption,
      selectedTimeEndOption
    ).then(() => {
      setDayOfWeekOptions(null);
      setTimeStartOptions(null);
      setTimeEndOptions(null);
    });
  };

  return (
    <Container fluid>
      <FormLabel>
        <FormLabel.Group inline>
          <FormLabel.Select
            label="Day not teach"
            placeholder="Select your day not teach"
            clearable
            value={selectedDayOfWeekOption}
            onChange={handleChangeDayOfWeek}
            options={dayOfWeekOptions}
          />
          <FormLabel.Select
            label="Time start"
            placeholder="Select your time start"
            clearable
            value={selectedTimeStartOption}
            onChange={handleChangeTimeStart}
            options={timeStartOptions}
          />
          <FormLabel.Select
            label="Time end"
            placeholder="Select your time end"
            clearable
            value={selectedTimeEndOption}
            onChange={handleChangeTimeEnd}
            options={timeEndOptions}
          />
        </FormLabel.Group>
        <FormLabel.Field inline>
          <button onClick={handleSubmit}>Submit</button>
        </FormLabel.Field>
      </FormLabel>
    </Container>
  );
}
