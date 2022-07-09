import axios from "axios";

const BASE_PATH = "https://4604-114-142-170-51.ap.ngrok.io";
// console.log(axios.get(`${BASE_PATH}/baca`))

export async function getUser() {

    try {
       const results = await axios.get(`${BASE_PATH}/baca`).then(
        //    setListUser(results.data.data)
           );
        //    console.log(results)
    //    console.log(results.data.data); 
    } catch (error) {
        console.log("ERROR GET: ", error);
    }
};

export async function editUser(dataUser, setIsEditing, setDataUser, setMessage) {
    const payload = dataUser;

    try {
        const results = await axios.put(`${BASE_PATH}/ubah/${dataUser.id}`, payload);
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

export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        namaperusahaan: dataUser.namaperusahaan,
        email: dataUser.email,
        password: dataUser.password,
        negara: dataUser.negara,
        alamat: dataUser.alamat,
        matauang: dataUser.matauang,
        bahasa: dataUser.bahasa
    };
console.log(payload);
    try {
        const results = await axios.post(`${BASE_PATH}/add`, payload);
        if (results.status === 200) {
            setDataUser({namaperusahaan: "", email: "", password:"", negara: "", alamat:"", matauang:"", bahasa: ""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
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