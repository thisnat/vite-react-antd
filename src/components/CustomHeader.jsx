import { Layout, Menu, Flex, Avatar, Switch } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Header } = Layout

import useStore from '../store/store'
import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

function CustomHeader() {
  const navigate = useNavigate()
  const myName = useStore((state) => state.myName)
  const myPfp = useStore((state) => state.myPfp)
  const { t, i18n } = useTranslation()

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
              label: t('title'),
            },
            {
              key: '1',
              label: t('nav_contact'),
              children: [
                { label: t('nav_list'), key: '2' },
                { label: t('nav_create'), key: '3' },
              ],
            },
            {
              key: '4',
              label: t('nav_current_location'),
            },
          ]}
        />
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
