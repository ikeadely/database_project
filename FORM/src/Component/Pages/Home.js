// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { getUser, editUser, postUser, deleteUser } from "../Service";

// export const Home = () => {
//     // const [counter, setCounter] = useState(0);
//     const [listUser, setListUser] = useState([]);
//     const [dataUser, setDataUser] = useState({namaperusahaan: "", email: "", password:"", negara:"", alamat:"", matauang:"", bahasa:""});
//     const [isEditing, setIsEditing] = useState(false);
//     const [message, setMessage] = useState("");
//     /// const [name, setName] = useState("");
//     /// const [fullName, setFullName] = useState("");
//     /// const [email, setEmail] = useState("");
//     /// const [dateOfBirth, setDateOfBirth] = useState("");
//     /// console.log("DATA USER: ", dataUser);
//     const getData = () => {

//         axios.get("https://bc67-114-142-170-5.ap.ngrok.io/baca").then( (response) => {

//             console.log(response)
//         }
//         )
//     }

//     useEffect( () => {
//         getData()
//     }
// )

//     useEffect(() => {
//         // getUser(setListUser);
//         setTimeout(() => {
//             setMessage("");
//         }, 3000);
//     }, [message]);

//     return (
//         <>
//         <div style={{ display: "flex", height: "100vh" }}>
//             <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
//                 <table>
//                     <tr>
//                         <th>namaperusahaan</th>
//                         <th>email</th>
//                         <th>password</th>
//                         <th>negara</th>
//                         <th>alamat</th>
//                         <th>matauang</th>
//                         <th>bahasa</th>
//                     </tr>
//                     {
//                         listUser.map((data, index) => 
//                         <tr key={index}>
//                             {/* <td>{data.organizationname}</td>
//                             <td>{data.businesslocation}</td> */}
//                             <td>{data.namaperusahaan}</td>
//                             <td>{data.email}</td>
//                             <td>{data.password}</td>
//                             <td>{data.negara}</td>
//                             <td>{data.alamat}</td>
//                             <td>{data.matauang}</td>
//                             <td>{data.bahasa}</td>
//                             <td>
//                                 <div>
//                                     <button
//                                         onClick={() => {
//                                             setIsEditing(true);
//                                             setDataUser(data);
//                                         }}
//                                     >
//                                         edit
//                                     </button>
//                                     <button 
//                                         onClick={() => {
//                                             ///console.log(data.id);
//                                             deleteUser(data.id, setMessage);
//                                         }}
//                                     >
//                                         delete
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                         )
//                     }
//                 </table>
//             </div>
//             <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 15 }}>
//                     <label>namaperusahaan</label>
//                     <input 
//                         type="text" 
//                         placeholder="input name" 
//                         value={dataUser?.namaperusahaan} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, namaperusahaan: e.target.value});
//                             /// setName(e.target.value);
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 15 }}>
//                     <label>email</label>
//                     <input 
//                         type="text" 
//                         placeholder="input email" 
//                         value={dataUser?.email}  
//                         onChange={(e) => {
//                             setDataUser({...dataUser, email: e.target.value});
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
//                     <label>password</label>
//                     <input 
//                         type="text" 
//                         placeholder="input password" 
//                         value={dataUser?.password} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, password: e.target.value});
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
//                     <label>negara</label>
//                     <input 
//                         type="text" 
//                         placeholder="input" 
//                         value={dataUser?.negara} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, negara: e.target.value});
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
//                     <label>alamat</label>
//                     <input 
//                         type="text" 
//                         placeholder="input" 
//                         value={dataUser?.alamat} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, alamat: e.target.value});
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
//                     <label>matauang</label>
//                     <input 
//                         type="text" 
//                         placeholder="input" 
//                         value={dataUser?.matauang} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, matauang: e.target.value});
//                         }}
//                     />
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
//                     <label>bahasa</label>
//                     <input 
//                         type="text" 
//                         placeholder="input" 
//                         value={dataUser?.bahasa} 
//                         onChange={(e) => {
//                             setDataUser({...dataUser, bahasa: e.target.value});
//                         }}
//                     />
//                 </div>
//                 {
//                     isEditing === false ? 
//                     <div>
//                         <button
//                             onClick={() => {
//                                 postUser(dataUser, setDataUser, setMessage)
//                             }}
//                         >
//                             Create New
//                         </button>
//                     </div> 
//                     : 
//                     <div>
//                         <button
//                             onClick={() => {
//                                 editUser(dataUser, setIsEditing, setDataUser, setMessage);
//                             }}
//                         >
//                             Save
//                         </button>
//                     </div> 
//                 }
//                 <div style={{ marginTop: 30 }}>
//                     {message}
//                 </div>
//                 {/* <div>
//                     <button>
//                         Simpan
//                     </button>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             editUser(dataUser);
//                         }}
//                     >
//                         Edit
//                     </button>
//                 </div> */}
//             </div>
//         </div>
//         </>
//     );
// };


import React, { useEffect, useState } from "react";

import { getUser, editUser, postUser, deleteUser } from "../Service";

export const Home = () => {
    // const [counter, setCounter] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [dataUser, setDataUser] = useState({standard: "", profesional: "", ultimate: ""});
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);

    return (
        <>
        <div style={{ display: "flex", backgroundImage: "linear-gradient(to right, white , whitesmoke)" }}>
            <div style={{ display: "flex", width: "70%", flexDirection: 'column' }}>
                <table>
                    <tr>
                        <th>standard</th>
                        <th>profesional</th>
                        <th>ultimate</th>
                    </tr>
                    {
                        listUser.map((data, index) => 
                        <tr key={data.id}>
                            <td>{data.standard}</td>
                            <td>{data.profesional}</td>
                            <td>{data.ultimate}</td>
                            <td>
                                {/* <div>
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
                                </div> */}
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
                <div style={{ display: "flex", flexDirection: "row", width: "500px", justifyContent: "space-evenly", marginBottom: 15 }}>
                    <label>standard</label>
                    <input 
                        type="text" 
                        placeholder="" 
                        value={dataUser?.standard} 
                        onChange={(e) => {
                            setDataUser({...dataUser, standard: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", boxShadow: "none", flexDirection: "row",  width: "400px", justifyContent: "space-evenly", marginBottom: 15 }}>
                    <label>profesional</label>
                    <input 
                        type="text" 
                        placeholder="" 
                        value={dataUser?.profesional}  
                        onChange={(e) => {
                            setDataUser({...dataUser, profesional: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row",  width: "500px", justifyContent: "space-evenly",textAlign: "center", marginBottom: 15 }}>
                    <label>ultimate</label>
                    <input 
                        type="text" 
                        placeholder="" 
                        value={dataUser?.ultimate}  
                        onChange={(e) => {
                            setDataUser({...dataUser, ultimate: e.target.value});
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
                <div style={{ marginTop: 20, color: "blueviolet" }}>
                    {message}
                </div>
               
            </div>
        </div>
        </>
    );
};




// import React, { useEffect, useState } from "react";

// import { getUser,deleteUser } from "../Service";

// export const Home = () => {
//     // const [counter, setCounter] = useState(0);
//     const [listUser, setListUser] = useState([]);
//     const  setDataUser = useState({namaperusahaan: "", email: "", password: "", negara: "",alamat:"",matauang:"",bahasa:""});
//     const setIsEditing = useState(false);
//     const [message, setMessage] = useState("");
//     // console.log("DATA USER: ", dataUser);

//     useEffect(() => {
//         getUser(setListUser);
//         setTimeout(() => {
//             setMessage("");
//         }, 3000);
//     }, [message]);

//     return (
    
//         <div style={{ display: "flex", height: "100vh" }}>
//             <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
//                 <table>
//                     <tr>
//                         <th>namaperusahaan</th>
//                         <th>email</th>

//                     </tr>
//                     {
//                         listUser.map((data, index) => 
//                         <tr key={index}>
//                             <td>{data.namaperusahaan}</td>
//                             <td>{data.email}</td>
                            
//                             <td>
//                                 <div>
//                                     <button
//                                         onClick={() => {
//                                             setIsEditing(true);
//                                             setDataUser(data);
//                                         }}
//                                     >
//                                         edit
//                                     </button>
//                                     <button 
//                                         onClick={() => {
//                                             // console.log(data.id);
//                                             deleteUser(data.id, setMessage);
//                                         }}
//                                     >
//                                         delete
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                         )
//                     }
//                 </table>
//             </div>
//             </div>
            
//             );
//             }