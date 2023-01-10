import axios from "axios";
const baseUrl = "http://localhost:8080/springdb/user";
const baseUrl1 = "http://localhost:8080/springdb";

class Autherization{

    RegistetUser(user){
        return axios.post(`${baseUrl}/register`,user);
    }

    getuser(){
        return axios.get(`${baseUrl}/login`);
    }

    getAllusers(){
        return axios.get(`${baseUrl1}/getproducts`);
    }

    deleteuser(productId){
        return axios.delete(`${baseUrl1}/delete/${productId}`)
    }

    UpdateUser(user){
        return axios.put(`${baseUrl}/update`,user);
    }

    getByProductid(productId){
        return axios.get(`${baseUrl1}/getbyid/${productId}`);
    }
}

export default new Autherization()