import axios from "axios";
import jwt_decode from "jwt-decode";

const API_REST_URL = "http://locallhost";

const headers = {
  Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
};

class SelectSubjecAPIService {
  getPlan() {
    return axios.get(API_REST_URL + "/plan/show/table", { headers });
  }

  getAllPlan() {
    return axios.get(API_REST_URL + "/plan/show/alltable", { headers });
  }

  getTimetable() {
    return axios.get(API_REST_URL + "/timetable/show/table", { headers });
  }

  getAllTimetable() {
    return axios.get(API_REST_URL + "/timetable/show/alltable", { headers });
  }

  getAllMember() {
    return axios.get(API_REST_URL + "/member/show/allmember", { headers });
  }

  createTimetable(yId, sId, cId, gId) {
    const body = {
      years: yId,
      semester: sId,
      courseId: cId,
      groupId: gId,
    };
    return axios.post(API_REST_URL + "/timetable/create/teaching ", body, {
      headers,
    });
  }

  deletTimetable(yId, sId, cId, gId) {
    axios.delete(
      API_REST_URL +
        "/timetable/delete/teaching" +
        "/" +
        yId +
        "/" +
        sId +
        "/" +
        cId +
        "/" +
        gId,
      { headers }
    );
  }

  login(username, password) {
    const body = {
      username: username,
      password: password,
    };
    return axios.post(API_REST_URL + "/member/login", body).then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify(jwt_decode(JSON.parse(localStorage.getItem("token"))))
      );
    });
  }
}

export default new SelectSubjecAPIService();
