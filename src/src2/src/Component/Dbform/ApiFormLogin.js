import axios from "axios";

const BASE_PATH ="http://localhost:5000";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/get`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}
export async function editUser(dataUser, setIsEditing, setDataUser, setMessage) {
    const payload = dataUser;

    try {
        const results = await axios.put(`${BASE_PATH}/up/${dataUser.id}`, payload);
        if (results.status === 200) {
            setIsEditing(false);
            setDataUser({Nama_Perusahaan:"", Email: "", Password: "", Negara: "", Alamat: "", Mata_Uang: "", Bahasa: "", Zona_Waktu: "" });
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
        Nama_Perusahaan: dataUser.Nama_Perusahaan,
        Email: dataUser.Email,
        Password: dataUser.Password,
        Negara: dataUser.Negara,
        Alamat: dataUser.Alamat,
        Mata_Uang: dataUser.Mata_Uang,
        Bahasa: dataUser.Bahasa,
        Zona_Waktu: dataUser.Zona_Waktu
    };

    try {
        const results = await axios.post(`${BASE_PATH}/add`, payload);
        if (results.status === 200) {
            setDataUser({Nama_Perusahaan:"", Email: "", Password: "", Negara: "", Alamat: "", Mata_Uang: "", Bahasa: "", Zona_Waktu: ""});
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