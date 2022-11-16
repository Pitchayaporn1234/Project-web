import React, { Subject } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";
import APIService from "../SelectSubjectAPIService";

export default class SelectSubject extends Subject {
  state = {
    plans: [],
    members: [],
    timetables: [],
  };

  componentDidMount() {
    APIService.getAllPlan().then((resA) => {
      this.setState({ plans: resA.data });
      APIService.getAllMember().then((resB) => {
        this.setState({ members: resB.data });
        APIService.getAllTimetable().then((resC) => {
          this.setState({ timetables: resC.data });
          this.memberMapping();
        });
      });
    });
  }

  deletTimetable(yId, sId, cId, gId) {
    APIService.deletTimetable(yId, sId, cId, gId);
  }

  createTimetable(yId, sId, cId, gId) {
    return APIService.createTimetable(yId, sId, cId, gId);
  }

  convert(plan, id) {
    var index = id - 1;

    if (plan.memberColum !== undefined) {
      if (plan.memberColum[index] !== undefined) {
        if (plan.memberColum[index].selected !== undefined) {
          return plan.memberColum[index].selected;
        }
      }
    }
    return false;
  }

  gt(plan) {
    if (plan.memberColum !== undefined) {
      {
        let ccheckbox;

        ccheckbox = plan.memberColum.map((member) => {
          return (
            <Table.Cell>
              <Checkbox
                toggle
                checked={this.convert(plan, member.memberId)}
                onChange={(e, data) => this.onItemCheck(e, data, plan)}
              />
            </Table.Cell>
          );
        });

        return ccheckbox;
      }
    }
  }

  ght() {
    let hcheckbox;
    if (this.state.members !== undefined) {
      var tempMember = this.state.members;
    }

    hcheckbox = tempMember.map((member) => {
      return <Table.HeaderCell>{member.thFirstName}</Table.HeaderCell>;
    });

    return hcheckbox;
  }

  memberMapping() {
    let tempPlans = this.state.plans;
    var tempMember = this.state.members;

    tempPlans.map((plan) => {
      this.setState((plan.memberColum = []));
      for (var i = 0; i < tempMember.length; i++) {
        plan.memberColum.push({ selected: false });
        plan.memberColum[i].memberId = tempMember[i].memberId;
        plan.memberColum[i].thFirstName = tempMember[i].thFirstName;
        plan.memberColum[i].thLastName = tempMember[i].thLastName;
      }
      return plan;
    });

    this.setState({
      plans: tempPlans,
    });

    this.tableMapping();
  }

  tableMapping() {
    let tempPlans = this.state.plans;
    let tempTimetables = this.state.timetables;

    console.log(tempPlans);
    console.log(tempTimetables);

    tempPlans.map((plan) => {
      tempTimetables.map((timetable) => {
        if (
          plan.years +
            plan.semester +
            plan.courseId.courseId +
            plan.groupId.groupId ===
          timetable.years +
            timetable.semester +
            timetable.courseId.courseId +
            timetable.groupId.groupId
        ) {
          plan.memberColum.map((member) => {
            if (member.memberId === timetable.memberId.memberId) {
              member.selected = timetable.memberId.selected;
            }
          });
        }
      });
    });

    console.log(tempPlans);

    this.setState({
      plans: tempPlans,
    });
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
          /*this.deletTimetable(item.years, item.semester, item.courseId.courseId, item.groupId.groupId);
                    plan.memberId = null;*/
        } else {
          /*this.createTimetable(item.years, item.semester, item.courseId.courseId, item.groupId.groupId).then((res) => {
                        this.setState(plan.memberId = res.data);
                    });*/
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
                {this.ght()}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.plans.map((plan) => {
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
                    {this.gt(plan)}
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
