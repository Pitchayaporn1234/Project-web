import React, { Subject } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";
import APIService from "../SelectSubjectAPIService";

const tempMember = [];

export default class SelectSubject extends Subject {
  state = {
    plans: [],
    timetables: [],
  };

  componentDidMount() {
    APIService.getPlan().then((res) => {
      this.setState({ plans: res.data });
      APIService.getTimetable().then((res2) => {
        this.setState({ timetables: res2.data });
        this.tableMapping();
      });
    });
  }

  deletTimetable(yId, sId, cId, gId, mId) {
    APIService.deletTimetable(yId, sId, cId, gId, mId);
  }

  createTimetable(yId, sId, cId, gId, mId) {
    return APIService.createTimetable(yId, sId, cId, gId, mId);
  }

  convert(plan) {
    if (plan.memberId !== null) {
      return true;
    } else {
      return false;
    }
  }

  tableMapping() {
    let tempPlans = this.state.plans;
    let tempTimetables = this.state.timetables;

    tempPlans.map((plan) => {
      tempTimetables.map((timetable) => {
        if (
          plan.years +
            plan.semester +
            plan.courseId.courseId +
            plan.groupId.groupId +
            JSON.parse(localStorage.getItem("user")).memberId ===
          timetable.years +
            timetable.semester +
            timetable.courseId.courseId +
            timetable.groupId.groupId +
            timetable.memberId.memberId
        ) {
          this.setState((plan.memberId = timetable.memberId));
        }
        return plan;
      });
    });

    this.setState({
      plans: tempPlans,
    });

    console.log(JSON.parse(localStorage.getItem("user")).memberId);
  }

  onItemCheck(e, data, item) {
    let tempPlans = this.state.plans;

    tempPlans.map((plan) => {
      if (
        plan.years +
          plan.semester +
          plan.courseId.courseId +
          plan.groupId.groupId ===
        item.years +
          item.semester +
          item.courseId.courseId +
          item.groupId.groupId
      ) {
        if (plan.memberId !== null) {
          this.deletTimetable(
            item.years,
            item.semester,
            item.courseId.courseId,
            item.groupId.groupId,
            JSON.parse(localStorage.getItem("user")).memberId
          );
          plan.memberId = null;
        } else {
          this.createTimetable(
            item.years,
            item.semester,
            item.courseId.courseId,
            item.groupId.groupId,
            JSON.parse(localStorage.getItem("user")).memberId
          ).then((res) => {
            this.setState((plan.memberId = res.data));
          });
        }
      }
      return plan;
    });

    this.setState({
      plans: tempPlans,
    });
  }

  render() {
    return (
      <div className="selectsubject">
        <Container fluid>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Semester</Table.HeaderCell>
                <Table.HeaderCell>Group Name</Table.HeaderCell>
                <Table.HeaderCell>Course Code</Table.HeaderCell>
                <Table.HeaderCell>Course Title</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.plans.map((plan) => {
                let teacherName;

                if (plan.memberId !== null) {
                  teacherName = plan.memberId.thFirstName;
                }

                return (
                  <Table.Row
                    key={
                      plan.years +
                      plan.semester +
                      plan.courseId.courseId +
                      plan.groupId.groupId
                    }
                  >
                    <Table.Cell>{plan.years}</Table.Cell>
                    <Table.Cell>{plan.semester}</Table.Cell>
                    <Table.Cell>{plan.groupId.group_name}</Table.Cell>
                    <Table.Cell>{plan.courseId.course_code}</Table.Cell>
                    <Table.Cell>{plan.courseId.course_title}</Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        toggle
                        toggleColor="red"
                        checked={this.convert(plan)}
                        onChange={(e, data) => this.onItemCheck(e, data, plan)}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="10"></Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    );
  }
}
