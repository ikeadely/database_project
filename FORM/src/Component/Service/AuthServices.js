import axios from "axios";

const BASE_PATH = "http://127.0.0.1:8080";
// console.log(axios.get(`${BASE_PATH}/baca`))

export async function getUser(setListUser) {
    try {
       const results = await axios.get(`${BASE_PATH}/read`);
       setListUser(results.data.data);
    //    console.log(results.data.data); 
    } catch (error) {
        console.log("ERROR GET: ", error);
    }
};

export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        standard: dataUser.standard,
        profesional: dataUser.profesional,
        ultimate: dataUser.ultimate
    };
console.log(payload);
    try {
        const results = await axios.post(`${BASE_PATH}/post`, payload);
        if (results.status === 200) {
            setDataUser({standard: "", profesional: "", ultimate: ""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};








export async function editUser(dataUser, setIsEditing, setDataUser, setMessage) {
    const payload = dataUser;

    try {
        const results = await axios.put(`${BASE_PATH}/up/${dataUser.id}`, payload);
        if (results.status === 200) {
            setIsEditing(false);
            setDataUser({namaperusahaan: "", email: "", password:"", negara: "", alamat:"", matauang:"", bahasa: ""});
            setMessage("User Edited Successfully!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error);
    }
    // console.log("EDIT USER", payload);
};


export async function deleteUser(dataUser, setMessage) {
    try {
        const results = await axios.delete(`${BASE_PATH}/delete/${dataUser.id}`);
        if (results.status === 200) {
            setMessage("User Deleted Successfully!!!")
            // console.log("DELETE SUCCESSFULLY !!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
}