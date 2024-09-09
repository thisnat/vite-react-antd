import React from 'react'
import { Layout, Avatar, Button, Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Content } = Layout

import useStore from './store/store'

const App = () => {
  const myName = useStore((state) => state.myName)
  const myPfp = useStore((state) => state.myPfp)
  const setMyName = useStore((state) => state.setMyName)
  const setMyPfp = useStore((state) => state.setMyPfp)

  const onFinish = (values) => {
    setMyName(values.name)
    setMyPfp(values.link)
  }

  return (
    <Content>
      <div className="content">
        <center>
          <h1>Profile</h1>
          <Avatar
            size={128}
            icon={<UserOutlined />}
            style={{ marginTop: '1rem' }}
            src={myPfp}
          />
          <br />
          <p style={{ marginTop: '1rem', fontSize: '1rem' }}>{myName}</p>
          <div style={{ marginTop: '2rem' }}>
            <h1>Setting</h1>
            <Form onFinish={onFinish} autoComplete="off">
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{ marginTop: '1rem' }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Picture link"
                name="link"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form>
          </div>
        </center>
      </div>
    </Content>
  )
}
export default App
