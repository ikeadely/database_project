import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
import React, { useState } from 'react';
import './FormLogin.css'

import { getUser} from "./ApiFormLogin";
// import { postUser } from './ApiFormLogin';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ApiFormLogin = () => {
  const navigate = useNavigate()
  const setListUser = useState({});
  const [dataUser, setDataUser] = useState({Nama_Perusahaan:"", Email: "", Password: "", Negara: "", Alamat: "", Mata_Uang: "", Bahasa: "", Zona_Waktu: "" })
  const setEditing = useState(false);
  const[message,setMessage]=useState("");

  useEffect(()=>{
    getUser(setListUser);
    setTimeout(()=>{
      setMessage("");
    }, 3000);
  }, [message]);
}
  
  const FormLogin = () => {
    const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    return (
      <Form className='.bg'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{padding:'50px',margin:"50px"}}
      >
        <h1 style={{textAlign:"center",fontFamily:"Arial"}}>Mengatur Profil Anda</h1>
        <Form.Item label="Nama Perusahaan">
          <Input />
          {/* <Input value={dataUser?.Nama_Perusahaan} 
          onChange={(e)=>{
            setDataUser({...dataUser,Nama_Perusahaan:e.target.value})
          }}/> */}
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>
        <Form.Item label="Negara">
        <Select>
          <Select.Option value="Indonesia">Indonesia</Select.Option>
          <Select.Option value="Singapura">Singapura</Select.Option>
          <Select.Option value="Australia">Australia</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Alamat">
          <Input />
        </Form.Item>
        <Form.Item label="Mata Uang">
        <Select>
          <Select.Option value="Rupiah">Rupiah</Select.Option>
          <Select.Option value="Dolar Singapura">Dolar Singapura</Select.Option>
          <Select.Option value="Dolar Australia">Dolar Australia</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Bahasa">
        <Select>
          <Select.Option value="Bahasa Indonesia">Bahasa Indonesia</Select.Option>
          <Select.Option value="English">English</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Zona Waktu">
        <Select>
          <Select.Option value="{GMT 7:00} Waktu Indonesia Barat (Asia/Jakarta)">GMT 7:00 Waktu Indonesia Barat (Asia/Jakarta)</Select.Option>
          <Select.Option value="{GMT 7:00} Waktu Indonesia Barat (Asia/Pontianak)">GMT 7:00 Waktu Indonesia Barat (Asia/Pontianak)</Select.Option>
          <Select.Option value="{GMT 8:00} Waktu Indonesia Tengah (Asia/Makassar)">GMT 8:00 Waktu Indonesia Tengah (Asia/Makassar)</Select.Option>
          <Select.Option value="{GMT 8:00} Waktu Indonesia Tengah (Asia/Ujung Pandang)">GMT 8:00 Waktu Indonesia Tengah (Asia/Ujung Pandang)</Select.Option>
          <Select.Option value="{GMT 9:00} Waktu Indonesia Tengah (Asia/Jayapura)">GMT 9:00 Waktu Indonesia Timur (Asia/Jayapura)</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="Simpan">
          Simpan
        </Button>
      </Form.Item>

      </Form>
    );
  };
  
  export default FormLogin;