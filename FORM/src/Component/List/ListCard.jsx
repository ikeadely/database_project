// import { Card, List } from 'antd';
// import React from 'react';
// const data = [
//   {
//     title: 'Nama Perusahaan',
//   },
//   {
//     title: 'Nama Lengkap',
//   },
//   {
//     title: 'Email',
//   },
// ];

// <div>
//     <button
//         onClick={() => {
//             // setIsEditing(true);
//             // setDataUser(data);
//         }}
//     >
//         edit
//     </button>
//     <button 
//         onClick={() => {
//             // console.log(data.id);
//             // deleteUser(data.id, setMessage);
//         }}
//     >
//         delete
//     </button>
// </div>

// const App = () => (
//   <List
//     grid={{
//       gutter: 16,
//       column: 4,
//     }}
//     dataSource={data}
//     renderItem={(item) => (
//       <List.Item>
//         <Card title={item.title}>-</Card>
//       </List.Item>
//     )}
//   />
// );

// export default App;


// import { Card } from 'antd';
// import React from 'react';

// const App = () => (
//   <Card
//     style={{
//       // height: 300, width: 700, marginLeft: 100, marginTop: 100, backgroundColor: 'whitesmoke'

//       // height: 100,
//       // width: 500,
//       // backgroundColor : 'blue'
//       backgroundColor: 'whitesmoke', height: '620px', padding: '150px'
//       // height: '400px', border: '1px solid white',padding: '100px',marginBottom: '200px',marginTop: '200px', marginLeft: '200px', marginRight: '200px', backgroundColor: 'whitesmoke'
//     }}
//   >
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// );

// export default App;

import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';

const App = () => {
  const [form] = Form.useForm();
  // const nameValue = Form.useWatch('name', form);
  return (
    <>
      <Form layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>
      </Form>

      {/* <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography> */}
    </>
  );
};

export default App;