import axios from 'axios';
const BASE_URL = "http://localhost:8080/springdb";

class AuthenticationService{

    createUser(UserDetails){
        return axios.post(BASE_URL+"/"+"register"+"/"+"create", UserDetails);
    }

    getUser(){
        return axios.get(BASE_URL+"/"+"register"+"/"+"list");
    }

    SendEmail(email){
        return axios.post(BASE_URL+"/"+"mail"+"/"+"sendMail",email);
    }
}

export default new  AuthenticationService()