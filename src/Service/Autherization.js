import axios from "axios";
const baseUrl = "http://localhost:8080/springdb/user";

class Autherization{

    RegistetUser(user){
        return axios.post(`${baseUrl}/register`,user);
    }

    getuser(){
        return axios.get(`${baseUrl}/login`);
    }

    // UpdateUser(id,user){
    //     return axios.put(`${baseUrl}/${id}`,user);
    // }
}

export default new Autherization()