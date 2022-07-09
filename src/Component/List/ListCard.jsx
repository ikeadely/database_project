import { Card, List } from 'antd';
import React from 'react';
const data = [
  {
    title: 'Nama Perusahaan',
  },
  {
    title: 'Nama Lengkap',
  },
  {
    title: 'Email',
  },
];

<div>
    <button
        onClick={() => {
            // setIsEditing(true);
            // setDataUser(data);
        }}
    >
        edit
    </button>
    <button 
        onClick={() => {
            // console.log(data.id);
            // deleteUser(data.id, setMessage);
        }}
    >
        delete
    </button>
</div>

const App = () => (
  <List
    grid={{
      gutter: 16,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>-</Card>
      </List.Item>
    )}
  />
);

export default App;