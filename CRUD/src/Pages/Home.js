import React, { useEffect, useState } from "react";

import { getUser, editUser, postUser, deleteUser } from "../Service";

export const Home = () => {
    // const [counter, setCounter] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [dataUser, setDataUser] = useState({nama: "", nama_lengkap: "", email: "", tanggal_lahir: ""});
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    // const [name, setName] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // console.log("DATA USER: ", dataUser);

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);

    return (
        <>
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Nama Lengkap</th>
                        <th>Email</th>
                        <th>Tanggal Lahir</th>
                        <th>Actions</th>
                    </tr>
                    {
                        listUser.map((data, index) => 
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                            <td>{data.nama_lengkap}</td>
                            <td>{data.email}</td>
                            <td>{data.tanggal_lahir}</td>
                            <td>
                                <div>
                                    <button
                                        onClick={() => {
                                            setIsEditing(true);
                                            setDataUser(data);
                                        }}
                                    >
                                        edit
                                    </button>
                                    <button 
                                        onClick={() => {
                                            // console.log(data.id);
                                            deleteUser(data.id, setMessage);
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>Nama</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama" 
                        value={dataUser?.nama} 
                        onChange={(e) => {
                            setDataUser({...dataUser, nama: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>Nama Lengkap</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama lengkap" 
                        value={dataUser?.nama_lengkap}  
                        onChange={(e) => {
                            setDataUser({...dataUser, nama_lengkap: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>Email</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan email" 
                        value={dataUser?.email} 
                        onChange={(e) => {
                            setDataUser({...dataUser, email: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>Tanggal Lahir</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan tanggal lahir" 
                        value={dataUser?.tanggal_lahir} 
                        onChange={(e) => {
                            setDataUser({...dataUser, tanggal_lahir: e.target.value});
                        }}
                    />
                </div>
                {
                    isEditing === false ? 
                    <div>
                        <button
                            onClick={() => {
                                postUser(dataUser, setDataUser, setMessage)
                            }}
                        >
                            Create New
                        </button>
                    </div> 
                    : 
                    <div>
                        <button
                            onClick={() => {
                                editUser(dataUser, setIsEditing, setDataUser, setMessage);
                            }}
                        >
                            Save
                        </button>
                    </div> 
                }
                <div style={{ marginTop: 30 }}>
                    {message}
                </div>
                {/* <div>
                    <button>
                        Simpan
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            editUser(dataUser);
                        }}
                    >
                        Edit
                    </button>
                </div> */}
            </div>
        </div>
        </>
    );
};