import { Card, Input } from "antd";
import React, { useEffect, useState } from "react";


import { postUser ,getUser} from "../Service";


export const InputForm = () => {
    // const [counter, setCounter] = useState(0);
    const setListUser = useState([]);
    const [dataUser, setDataUser] = useState({Organization: "", Bussines: ""});
    const  setIsEditing = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);
    return(
    
           <div className="site-card-border-less-wrapper">
            <Card style={{display:"flex", width: "1350px",paddingTop: "250px", justifyContent:"center" }}>
            
            
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 15 }}>
                
                    <Input
                      
                        type="text" 
                        placeholder="Masukkan organization" 
                        value={dataUser?.Organization} 
                        onChange={(e) => {
                            setDataUser({...dataUser, Organization: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 20 }}>
                
                    <Input 
                        type="text" 
                        placeholder="Masukkan nama lengkap" 
                        value={dataUser?.Bussines}  
                        onChange={(e) => {
                            setDataUser({...dataUser, Bussines: e.target.value});
                        }}
                    />
                </div>
               
                {
          
                    <div>
                        <button
                            
                            onClick={() => {
                                postUser(dataUser, setIsEditing, setDataUser, setMessage)
                                 }}
                        >
                            Save
                        </button>
                    </div> 
                }
                <div style={{ marginTop: 30 }}>
                    {message}
                </div>
            </Card>   
                </div>
        
    );
            }