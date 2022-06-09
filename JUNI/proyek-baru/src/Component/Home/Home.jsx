// import axios from "axios";
// import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home (){
//     const history = useNavigate();
//     const [Nama, setNama] = useState("");
//     const [Daerah, setDaerah] = useState("");
//     const [tahunMasuk, settahunMasuk] = useState("");
//     const [tahunKeluar, settahunKeluar] = useState("");
//     const [NoHp, setNoHp] = useState("");
//     const [Email, setEmail] = useState("");


//     useEffect(() => {
//         if(localStorage.getItem("user-info")) {
//             history.push("/home");
//         }
//     });
//     async function postTemplate(){
//         let post ={
//             Nama: Nama,
//             Daerah: Daerah,
//             tahunMasuk: tahunMasuk,
//             tahunKeluar: tahunKeluar,
//             NoHp: NoHp,
//             Email: Email,   
//         };
//         try{
//             const hasil = await axios.post ("ttp://127.0.0.1:5000/read", post);
//             console.log("yeay",hasil);
//             localStorage.setItem("Nama",JSON.stringify(hasil.Nama))       
//         }
//     }
// }






// import React from "react";
// import axios from "axios";
// import { Form,FormLabel,FormControl } from "react-bootstrap";
// import Daftar from "./Daftar";


// class Home extends React.Component{
//     constructor(){
//         super()
//         this.state ={
//             user:[],
//             Nama: null,
//             Daerah: null,
//             tahunMasuk: null,
//             tahunKeluar: null,
//             NoHp: null,
//             Email: null,
//         }
//     }

// componentDidMount(){
//     const url = "http://127.0.0.1:5000/read"
//     axios.get(url)
//     .then( user => {
//         console.log(user.data);
//         this.setState({
//             user:user.data
//         })
//     })
// }

// saveDatatoAPI(e){
//     e.preventDefault()
//     const apiURL = "http://127.0.0.1:5000/read"
//     const data = {
//         Nama: this.state.Nama,
//         Daerah: this.state.Daerah,
//         tahunMasuk:this.state.tahunMasuk,
//         tahunKeluar: this.state.tahunKeluar,
//         NoHp: this.state.NoHp,
//         Email: this.state.Email,
//     }
//     axios.post(apiURL, data)
//     .then(resp => {
//         let user = this.state.user
//         user.push(resp.data)
//         this.setState({ user})
//     })
// }

// render(){
//     const {user }= this.state
//     return(
//         <div>
// <Daftar/>
           
// <Form style={{padding:"50px"}}
// method="post"
// onSubmit={ (e) => this.saveDatatoAPI(e)}>
    
//     <h2> Silahkan Masukan Data Diri Anda!</h2>
//     <Form.Group className="mb-3">
//       <FormLabel>Nama</FormLabel>
//       <FormControl style={{width:"450px"}} type="text"
//        name="Nama"
//        placeholder="Nama lengkap" 
//        onChange={(e) => {
//            this.setState({ Nama: e.target.value})
//        }}/>
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Daerah</FormLabel>
//       <FormControl style={{width:"450px"}}  type="daerah"
//        name="Daerah"
//        placeholder="Daerah"
//        onChange={(e) => {
//         this.setState({ Daerah: e.target.value})
//         }} />
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Tahun Masuk</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="tahunm" 
//       name="tahunMasuk" 
//       placeholder="Tahun Masuk"
//       onChange={(e) => {
//         this.setState({ Nama: e.tahunMasuk.value})
//         }} />
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Tahun Keluar</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="tahunk" 
//       name="tahunKeluar" 
//       placeholder="Tahun Keluar" 
//       onChange={(e) => {
//         this.setState({ tahunKeluar: e.target.value})
//         }}/>
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>No.hp</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="no" 
//       name="noHp" 
//       placeholder="No.hp" 
//       onChange={(e) => {
//         this.setState({ NoHp: e.target.value})
//         }}/>
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email</Form.Label>
//       <Form.Control style={{width:"450px"}}  type="email" 
//       name="Email" 
//       placeholder="Email" 
//       onChange={(e) => {
//         this.setState({ Email: e.target.value})
//      }}/>
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="lengkapi data anda" />
//     </Form.Group>
//     <button type="submit"> Submit </button>
  
//     </Form>
    
//     <div className="hasil" >
//     {user.length < 1 }
//            <pre> debug nama: {this.state.Nama}</pre>
//            <pre> debug daerah: {this.state.Daerah}</pre>
//            <pre> debug tahun masuk :{this.state.tahunMasuk}</pre>
//            <pre> debug tahun keluar:{this.state.tahunKeluar}</pre>
//            <pre> debug No Hp: {this.state.NoHp}</pre>
//            <pre> debug email: {this.state.Email}</pre>

//     </div>

//     <ul>
//         {user.map((user,idx) => {
//             return(
//                 <li key={idx}>{user.Nama}</li>
//             )
//         }
        
//         )}
//     </ul>
   
//         </div>
//     )
// }

// }

// export default Home;


























// import React from "react";
// import { useState } from "react";
// import Daftar from "./Daftar";
// // import { Form } from "react-bootstrap";

// function Home (){
//     const [Nama,setNama] = useState("");
//     const [Daerah,setDaerah] =useState("");
//     const [tahunMasuk, settahunMasuk] = useState ("");
//     const [tahunKeluar, settahunKeluar] = useState ("");
//     const [NoHp, setNoHp] = useState ("");
//     const [Email, setEmail] = useState(""); 
//     const [pesan, setPesan] = useState ("");

//     let handleSubmit = async (e) => {
//         e.preventDefault ();
//         try {
//             let res = await fetch("https://2222-114-142-169-47.ap.ngrok.io/creat",{
//                 method: "POST",
//                 body:JSON.stringify({

//                 'Nama': Nama,
//                 'Daerah': Daerah,
//                 'Tahun Masuk': tahunMasuk,
//                 'tahunKeluar': tahunKeluar,
//                 'NoHp': NoHp,
//                 'Email': Email,

//                 }),
//             });

//              await res.json();
//             if (res.status === 200){
//                 setNama("");
//                 setDaerah("");
//                 settahunMasuk("");
//                 settahunKeluar("");
//                 setNoHp("");
//                 setEmail("");
//                 setPesan ("Sukses");
//             }else{
//                 setPesan (" Gagal");
//             }
//         }catch(err){
//             console.log(err);
//         }
//     };
//     return(
//         <div className="Home">
//             <Daftar/>
//             <form onSubmit={handleSubmit} style={{padding:"50px"}}>
//             <h2> Silahkan Masukan Data Diri Anda!</h2>
                
//                 <input
//                style={{width:"450px", height:"35px", margin:"7px"}} 
//                type="text"
//                 value={Nama}
//                 placeholder="Nama Lengkap"
//                 onChange={(e) => setNama (e.target.value)}
//             />
//                     <input
//                 style={{width:"450px", height:"35px", margin:"7px"}}
//                 type="text"
//                 value={Daerah}
//                 placeholder="Daerah"
//                 onChange={(e) => setDaerah (e.target.value)}
//             />


//                 <input
//                 style={{width:"450px", height:"35px", margin:"7px"}}
//                 type="text"
//                 value={tahunMasuk}
//                 placeholder="Tahun Masuk"
//                 onChange={(e) => settahunMasuk (e.target.value)}
//             />

//                 <input
//                 style={{width:"450px", height:"35px", margin:"7px"}}
//                 type="text"
//                 value={tahunKeluar}
//                 placeholder="Tahun Keluar"
//                 onChange={(e) => settahunKeluar (e.target.value)}
//             />

//                 <input
//                 style={{width:"450px", height:"35px", margin:"7px"}}
//                 type="text"
//                 value={NoHp}
//                 placeholder="No.Hp"
//                 onChange={(e) => setNoHp (e.target.value)}
//             />
//                 <input
//                 style={{width:"450px", height:"35px", margin:"7px"}}
//                 type="email"
//                 value={Email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail (e.target.value)}
//             />

//             <button type="submit">Masukan</button>
//             <div className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
//             </form>

//         </div>
//     );
// }
// export default Home;




import React from "react";
import { useState } from "react";
// import { Form } from "react-bootstrap";

function Home (){
    const [Nama,setNama] = useState("");
    const [Daerah,setDaerah] =useState("");
    const [tahunMasuk, settahunMasuk] = useState ("");
    const [tahunKeluar, settahunKeluar] = useState ("");
    const [NoHp, setNoHp] = useState ("");
    const [Email, setEmail] = useState(""); 
    const [pesan, setPesan] = useState ("");

    let handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            let res = await fetch("https://2222-114-142-169-47.ap.ngrok.io/creat",{
                method: "POST",
                body:JSON.stringify({

                'Nama': Nama,
                'Daerah': Daerah,
                'Tahun Masuk': tahunMasuk,
                'tahunKeluar': tahunKeluar,
                'NoHp': NoHp,
                'Email': Email,

                }),
            });

             await res.json();
            if (res.status === 200){
                setNama("");
                setDaerah("");
                settahunMasuk("");
                settahunKeluar("");
                setNoHp("");
                setEmail("");
                setPesan ("Sukses");
            }else{
                setPesan (" Gagal");
            }
        }catch(err){
            console.log(err);
        }
    };
    return(
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={Nama}
                placeholder="Nama Lengkap"
                onChange={(e) => setNama (e.target.value)}
            />
                    <input
                type="text"
                value={Daerah}
                placeholder="Daerah"
                onChange={(e) => setDaerah (e.target.value)}
            />


                    <input
                type="text"
                value={tahunMasuk}
                placeholder="Tahun Masuk"
                onChange={(e) => settahunMasuk (e.target.value)}
            />

                    <input
                type="text"
                value={tahunKeluar}
                placeholder="Tahun Keluar"
                onChange={(e) => settahunKeluar (e.target.value)}
            />

                    <input
                type="text"
                value={NoHp}
                placeholder="No.Hp"
                onChange={(e) => setNoHp (e.target.value)}
            />
                    <input
                type="email"
                value={Email}
                placeholder="Email"
                onChange={(e) => setEmail (e.target.value)}
            />

            <button type="submit">Masukan</button>
            <div className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
            </form>

        </div>
    );
}
export default Home;