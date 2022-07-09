import axios from "axios";


const BASE_PATH = "http://localhost:5000";


export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        organizationname: dataUser.organizationname,
        businesslocation: dataUser.businesslocation,
    };

    try {
        const results = await axios.post(`${BASE_PATH}/create`, payload);
        if (results.status === 200) {
            setDataUser({organizationname: "", businesslocation: ""});
            setMessage("Success !!");
        }
        
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};
    