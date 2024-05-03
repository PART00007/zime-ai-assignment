import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Post from "../Post"
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import "../styles/Home.css"
const { Header, Content, Footer, Sider } = Layout;


const items1 = ['Home', 'About', 'Contactus'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    
  };
});


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [page,setPage] = useState(0)

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
       
      <div style={{color:"white",theme:"dark" , justifyContent:"flex-start",margin:"10px"}}>
       <Link to="/" style={{margin:"10px"}} >Home</Link>
       <Link to="/about" style={{margin:"10px"}}>About</Link>
       <Link to="/contactus" style={{margin:"10px"}}>Contactus</Link>
      </div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
       
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <h1 style={{justifyContent:"center"}}> Filter Section</h1>
        
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <div className="table_container">
            <Post page={page} setPage={setPage} />
            </div>
        
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;