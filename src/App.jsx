import React from 'react'
import { Layout, Menu, theme, Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <p style={{ color: 'white' }}>Test website</p>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: '1',
              label: <Link to="/contact">Contact</Link>,
            },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>

      <Content>
        <div
          style={{
            padding: 24,
            minHeight: '90vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <center>
            <h1>Profile</h1>
            <Avatar
              size={128}
              icon={<UserOutlined />}
              style={{ marginTop: '1rem' }}
            />
            <br />
            <h3 style={{ marginTop: '1rem' }}>John Doe</h3>
            <Button type="primary" style={{ marginTop: '1rem' }}>
              Primary Button
            </Button>
          </center>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
export default App
