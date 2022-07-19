import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
import React, { useState } from 'react';

import { getUser} from "./ApiFormLogin";
import { postUser } from './ApiFormLogin';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { AlignRightOutlined } from '@ant-design/icons';

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
      <>
      <Form layout='vertical'
        style={{backgroundColor: 'bluepowder', paddingInline: '400px', textAlign: 'center'}}
        wrapperCol={{
          span: 25,
          
        }}
      >
        <h1 style={{textAlign:"center",fontFamily:"Arial"}}>Mengatur Profil Anda</h1>
        <Form.Item  label="Nama Perusahaan">
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
          <Input.Password />
        </Form.Item>
        <Form.Item label="Negara">
        <Select style={{textAlign:"start"}} >
          <Select.Option value="Indonesia">Indonesia</Select.Option>
          <Select.Option value="Singapura">Singapura</Select.Option>
          <Select.Option value="Australia">Australia</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Alamat">
          <Input />
        </Form.Item>
        <Form.Item label="Mata Uang">
        <Select style={{textAlign:"start"}}>
          <Select.Option value="Rupiah">Rupiah</Select.Option>
          <Select.Option value="Dolar Singapura">Dolar Singapura</Select.Option>
          <Select.Option value="Dolar Australia">Dolar Australia</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Bahasa">
        <Select style={{textAlign:"start"}}>
          <Select.Option value="Bahasa Indonesia">Bahasa Indonesia</Select.Option>
          <Select.Option value="English">English</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item label="Zona Waktu">
        <Select style={{textAlign:"start"}}>
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
        </>
    );
  };
  
  export default FormLogin;
