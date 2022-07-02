import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const TampilanLogin = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div classname="mt-5">
    <Form
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 11,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"


    >
      <Form.Item
        label="Organization Name"
        name="organization name"
        rules={[
          {
            required: true,
            message: 'Please input your organization name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Business Location"
        name="business location"
        rules={[
          {
            required: true,
            message: 'Please input your business location!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 7,
          span: 10,
        }}
      > */}
        {/* <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 7,
          span: 10,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>
  );
};

export default TampilanLogin;