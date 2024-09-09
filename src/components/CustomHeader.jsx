import { Layout, Menu, Flex, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Header } = Layout

import useStore from '../store/store'
import { useNavigate } from 'react-router-dom'

function CustomHeader() {
  const navigate = useNavigate()
  const myName = useStore((state) => state.myName)
  const myPfp = useStore((state) => state.myPfp)

  const onClick = (e) => {
    if (e.key == '2') {
      navigate('/contact')
    } else if (e.key == '3') {
      navigate('/contact/create')
    } else if (e.key == '0') {
      navigate('/')
    } else if (e.key == '4') {
      window.location.href =
        'https://www.google.com/maps?saddr=Current+Location'
    }
  }

  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: 'white',
      }}
    >
      <Flex justify="space-between">
        <Menu
          style={{ width: '50%' }}
          mode="horizontal"
          onClick={onClick}
          items={[
            {
              key: '0',
              label: 'Test website',
            },
            {
              key: '1',
              label: 'Contact',
              children: [
                { label: 'List', key: '2' },
                { label: 'Create', key: '3' },
              ],
            },
            {
              key: '4',
              label: 'Current location',
            },
          ]}
        />
        <div>
          <span>
            <Avatar icon={<UserOutlined />} src={myPfp} />
            <span style={{ marginLeft: '0.5rem', marginRight: '1rem' }}>
              {myName}
            </span>
          </span>
        </div>
      </Flex>
    </Header>
  )
}

export default CustomHeader
