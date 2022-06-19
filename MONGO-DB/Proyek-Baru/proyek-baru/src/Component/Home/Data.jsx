import React, {Fragment}from "react";
import { useState } from "react";
import { Form,FormControl,FormLabel,Button } from "react-bootstrap";
import Daftar from "./Daftar";
import Swal from "sweetalert2";

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
            let res = await fetch("https://18f1-125-160-101-33.ap.ngrok.io/creat",{
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
           <h2> Isi Identitas Anda!</h2>
           <Form.Group className="mb-3">
             <FormLabel>Nama</FormLabel>
             <FormControl style={{width:"450px"}} type="text" 
             name="Nama"  
             placeholder="Nama lengkap" 
             onChange={(e) => setNama (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" >
             <FormLabel>Daerah</FormLabel>
             <FormControl style={{width:"450px"}}  type="daerah" 
             name="Daerah" 
             placeholder="Daerah"
             onChange={(e) => setDaerah (e.target.value)} />
           </Form.Group>
           <Form.Group className="mb-3" >
             <FormLabel>Tahun Masuk</FormLabel>
             <Form.Control style={{width:"450px"}}  type="tahunm"
              name="Tahun Masuk" 
              placeholder="Tahun Masuk" 
              onChange={(e) => settahunMasuk (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" >
             <FormLabel>Tahun Keluar</FormLabel>
             <Form.Control style={{width:"450px"}}  type="tahunk" 
             name="Tahun Keluar" 
             placeholder="Tahun Keluar" 
             onChange={(e) => settahunKeluar (e.target.value)}/>
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
             <Form.Check type="checkbox" label="lengkapi data anda" />
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






// import React, {Fragment}from "react";
// import { useState } from "react";
// import { Form,FormControl,FormLabel,Button } from "react-bootstrap";
// import Daftar from "./Daftar";

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
//             let res = await fetch("https://3235-36-72-215-251.ap.ngrok.io/creat",{
//                 method: "POST",
//                 body:JSON.stringify({

//                 'Nama': Nama,
//                 'Daerah': Daerah,
//                 'Tahun Masuk': tahunMasuk,
//                 'tahunKeluar': tahunKeluar,
//                 'No.Hp': NoHp,
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
//       <Fragment>
//            <Daftar/>
           
//            <Form onSubmit={handleSubmit} style={{padding:"50px"}}>
//            <h2> Silahkan Masukan Data Diri Anda!</h2>
//            <Form.Group className="mb-3">
//              <FormLabel>Nama</FormLabel>
//              <FormControl style={{width:"450px"}} type="text" 
//              name="Nama"  
//              placeholder="Nama lengkap" 
//              onChange={(e) => setNama (e.target.value)}/>
//            </Form.Group>
//            <Form.Group className="mb-3" >
//              <FormLabel>Daerah</FormLabel>
//              <FormControl style={{width:"450px"}}  type="daerah" 
//              name="Daerah" 
//              placeholder="Daerah"
//              onChange={(e) => setDaerah (e.target.value)} />
//            </Form.Group>
//            <Form.Group className="mb-3" >
//              <FormLabel>Tahun Masuk</FormLabel>
//              <Form.Control style={{width:"450px"}}  type="tahunm"
//               name="Tahun Masuk" 
//               placeholder="Tahun Masuk" 
//               onChange={(e) => settahunMasuk (e.target.value)}/>
//            </Form.Group>
//            <Form.Group className="mb-3" >
//              <FormLabel>Tahun Keluar</FormLabel>
//              <Form.Control style={{width:"450px"}}  type="tahunk" 
//              name="Tahun Keluar" 
//              placeholder="Tahun Keluar" 
//              onChange={(e) => settahunKeluar (e.target.value)}/>
//            </Form.Group>
//            <Form.Group className="mb-3" >
//              <FormLabel>No.hp</FormLabel>
//              <Form.Control style={{width:"450px"}}  type="no" 
//              name="No.Hp" placeholder="No.hp" 
//              onChange={(e) => setNoHp (e.target.value)}/>
//            </Form.Group>
//            <Form.Group className="mb-3" controlId="formBasicEmail">
//              <Form.Label>Email</Form.Label>
//              <Form.Control style={{width:"450px"}}  type="email" 
//              name="Email" 
//              placeholder="Email" 
//              onChange={(e) => setEmail (e.target.value)}/>
//            </Form.Group>
//            <Form.Group className="mb-3" controlId="formBasicCheckbox">
//              <Form.Check type="checkbox" label="lengkapi data anda" />
//            </Form.Group>
//            <Button variant="outline-success" type="submit" >
//            Submit
//          </Button>
//          <div  className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
//          </Form>
        
//         </Fragment>
//     );
// }
// export default Home;






