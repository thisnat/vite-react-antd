import { Layout, Menu } from 'antd'
const { Sider } = Layout

import { useNavigate } from 'react-router-dom'
import useStore from '../store/store'

import { useTranslation } from 'react-i18next'

function CustomSider() {
  const collapsed = useStore((state) => state.collapsed)
  const setCollapsed = useStore((state) => state.setCollapsed)
  const navigate = useNavigate()
  const { t } = useTranslation()

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
    setCollapsed()
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={0}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={onClick}
        items={[
          {
            key: '0',
            label: '✨ ' + t('title'),
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
    </Sider>
  )
}

export default CustomSider
