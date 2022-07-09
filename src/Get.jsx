import React, { Component } from "react";
import axios from "axios";

class Get extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataApi:[]
        }
    }


    componentDidMount () {
         axios.get('http://localhost:5000/read').then(res => {
             console.log("GET API:",res.data.data[0]);
            this.setState({
                dataApi:res.data.data
            })
         });

    }

render (){
    return (
        <div>
            <p>
                READ DATABASE
            </p>
            {this.state.dataApi.map((dat,lucu)=>
            {
                return(<div key={lucu}><p> 
                        {dat.id},{dat.organizationname},{dat.businesslocation}
                         </p></div>);
            })}
        </div>
    );
}
}

export default Get;