import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const TampilanLogin = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div classname="mt-5">
    <Form layout='vertical'
    style={{backgroundColor: 'bluepowder',paddingInline: '400px', textAlign: 'center'}}
      name="basic"
      wrapperCol={{
        span: 25,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"


    >
      <h1 style={{textAlign:"center",fontFamily:"Arial"}}>Selamat Datang</h1>
      <p style={{textAlign:"center",fontFamily:"Arial"}}>asadbfhgjh</p>
      
      <Form.Item 
        label="Nama Perusahaan"
        name="Nama Perusahaan"
        rules={[
          {
            required: true,
            message: 'Masukkan Nama Perusahaan',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Masukkan Email',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="Simpan" onClick={() => {navigate("/formlogin");}}>
          Simpan
        </Button>
      </Form.Item>

    </Form>
</div>
  );
};

export default TampilanLogin;