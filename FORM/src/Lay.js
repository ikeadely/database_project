import React from 'react';
import { Layout } from 'antd';
import Tengah from './Tengah';
import HA from './HA';
import "https://cdnjs.cloudflare.com/ajax/libs/antd/4.21.3/antd.min.js" ;
const { Header, Footer, Content } = Layout;


function Lay() {
  return (
    <Layout>
      <Header style={{background:"white"}}><HA/></Header>
      <Header>Header</Header>
      <Content>
      <Tengah/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Lay;