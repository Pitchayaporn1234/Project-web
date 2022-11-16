import axios from 'axios';
import jwt_decode from "jwt-decode";

const API_REST_URL = 'http://localhost:172.18.33.74';

const headers = {
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
};

class ReplaceAPIService {

    createLeaveTeach(semester, year, dateStart, dateEnd, note) {
        const body = {
            'semester' : semester,
            'year': year,
            'dateStart' : dateStart,
            'dateEnd' : dateEnd,
            'note' : note
        };
        return axios.post(API_REST_URL + '/leaveteach/create/teacher ', body , { headers });
    }

}

export default new ReplaceAPIService();