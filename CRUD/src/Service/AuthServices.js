import axios from "axios";

const BASE_PATH = "https://273f-36-72-215-55.ap.ngrok.io";

export async function getUser(setListUser) {
    try {
       const results = await axios.get(`${BASE_PATH}/list`);
       setListUser(results.data.data);
    //    console.log(results.data.data); 
    } catch (error) {
        console.log("ERROR GET: ", error);
    }
};

export async function editUser(dataUser, setIsEditing, setDataUser, setMessage) {
    const payload = dataUser;

    try {
        const results = await axios.put(`${BASE_PATH}/update/${dataUser.id}`, payload);
        if (results.status === 200) {
            setIsEditing(false);
            setDataUser({nama: "", nama_lengkap: "", email: "", tanggal_lahir: ""});
            setMessage("User Edited Successfully!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error);
    }
    // console.log("EDIT USER", payload);
};

export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        nama: dataUser.nama,
        nama_lengkap: dataUser.nama_lengkap,
        email: dataUser.email,
        tanggal_lahir: dataUser.tanggal_lahir
    };

    try {
        const results = await axios.post(`${BASE_PATH}/create`, payload);
        if (results.status === 200) {
            setDataUser({nama: "", nama_lengkap: "", email: "", tanggal_lahir: ""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};

export async function deleteUser(data, setMessage) {
    try {
        const results = await axios.delete(`${BASE_PATH}/delete/${data}`);
        if (results.status === 200) {
            setMessage("User Deleted Successfully!!!")
            // console.log("DELETE SUCCESSFULLY !!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
}