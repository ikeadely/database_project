import React, {Fragment}from "react";
import { useState } from "react";
import { Form,FormControl,FormLabel,Button } from "react-bootstrap";
import Daftar from "./Daftar";
import Swal from "sweetalert2";

function Home (){
    const [Nama,setNama] = useState("");
    const [TempatTanggalLahir,setTempatTanggalLahir] =useState("");
    const [NoHp, setNoHp] = useState ("");
    const [Email, setEmail] = useState(""); 
    const [pesan, setPesan] = useState ("");

    let handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            let res = await fetch("https://3235-36-72-215-251.ap.ngrok.io/creat",{
                method: "POST",
                body:JSON.stringify({

                'Nama': Nama,
                'TempatTanggalLahir': TempatTanggalLahir,
                'No.Hp': NoHp,
                'Email': Email,

                }),
            });

             await res.json();
            if (res.status === 200){
                setNama("");
                setTempatTanggalLahir("");
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

    const alert =()=>{
      Swal.fire({
        title:"Data Anda Sudah Berhasil Di Simpan!",
        icon: 'success'
      });
    };
    return(
      <Fragment>
           <Daftar/>
           
           <Form onSubmit={handleSubmit} style={{padding:"50px"}}>
           <h2> Masukan Identitas Data Diri Anda!</h2>
           <Form.Group className="mb-3">
             <FormLabel>Nama</FormLabel>
             <FormControl style={{width:"450px"}} type="text" 
             name="Nama"  
             placeholder="Nama lengkap" 
             onChange={(e) => setNama (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" >
             <FormLabel>Tempat Tanggal Lahir</FormLabel>
             <FormControl style={{width:"450px"}}  type="TempatTanggalLahir" 
             name="TempatTanggalLahir" 
             placeholder="Tempat Tanggal Lahir"
             onChange={(e) => setTempatTanggalLahir (e.target.value)} />
           </Form.Group>
           <Form.Group className="mb-3" >
             <FormLabel>No.hp</FormLabel>
             <Form.Control style={{width:"450px"}}  type="no" 
             name="No.Hp" placeholder="No.hp" 
             onChange={(e) => setNoHp (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control style={{width:"450px"}}  type="email" 
             name="Email" 
             placeholder="Email" 
             onChange={(e) => setEmail (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Apakah Data Anda Sudah Benar!" />
           </Form.Group>
           <Button onClick={()=> alert()} variant="outline-success" type="submit" >
           Submit
         </Button>
         <div  className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
         </Form>
        
        </Fragment>
    );
}
export default Home;
