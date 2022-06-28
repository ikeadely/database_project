import axios from "axios";

const BASE_PATH = "http://localhost:5000"
export async function getUser() {
    try{
        const result = await axios.get(`${BASE_PATH}/read`);
        console.log(result.data.data);
    } catch(error){
        console.log(error);
    }
};