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
        // fetch ('https://jsonplaceholder.typicode.com/posts')
        // .then(Response => Response.json ())
        //  .then (yoi  => { // .then (json => console.log(json))
        //     this.setState({
        //         dataApi: yoi
        //     }); CONSUM DENGAN FECTH

        //  });   
         
         axios.get('https://6738-2404-c0-7140-00-76dd-acf3.ap.ngrok.io/read').then(res => {
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
                Cara Get Api
            </p>
            {this.state.dataApi.map((dat,lucu)=>
            {
                return(<div key={lucu}><p> 
                        {dat.id}, {dat.email}
                         </p></div>);
            })}
        </div>
    );
}
}

export default Get;