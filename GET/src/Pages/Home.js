import React, { useEffect, useState } from "react";

import { getUser } from "../Service";

export const Home = () => {
    const [counter, setCounter] = useState(0);
    const [ListUser, setListUser] = useState([]);
    // console.log(counter);

    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
        <div style={{display: "flex", height: "100vh", alighItem: "center", justifyContent: "center"}}>
        <div>
            <p>COUNT; {counter}</p>
            <button
                onClick={()=> {
                    setCounter(counter + 1);
                }}
            >
                <p>Add Counter</p>
            </button>
        </div>
        </div>
        </>
    );
};