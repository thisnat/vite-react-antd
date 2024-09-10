import { Layout, Flex, Avatar, Switch, Button } from 'antd'
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
const { Header } = Layout

import useStore from '../store/store'

import { useTranslation } from 'react-i18next'

function CustomHeader() {
  const myName = useStore((state) => state.myName)
  const myPfp = useStore((state) => state.myPfp)
  const collapsed = useStore((state) => state.collapsed)
  const setCollapsed = useStore((state) => state.setCollapsed)
  const { i18n } = useTranslation()

  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: 'white',
      }}
    >
      <Flex justify="space-between">
        <div>
          <Button
            type="text"
            onClick={() => setCollapsed()}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </div>
        <div>
          <span>
            <Avatar icon={<UserOutlined />} src={myPfp} />
            <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              {myName}
            </span>
            <Switch
              checkedChildren="en"
              unCheckedChildren="th"
              defaultChecked
              style={{ marginRight: '1rem' }}
              onChange={(isOn) => {
                if (isOn) {
                  i18n.changeLanguage('en')
                } else {
                  i18n.changeLanguage('th')
                }
              }}
            />
          </span>
        </div>
      </Flex>
    </Header>
  )
}

export default CustomHeader
