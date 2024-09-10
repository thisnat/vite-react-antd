import { Space, Table, Input, Button } from 'antd'
import { useState } from 'react'
import useStore from '../store/store'
import { useNavigate } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
import { useTranslation } from 'react-i18next'

function Contact() {
  const [searchText, setSearchText] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [showClearBtn, setShowClearBtn] = useState(false)
  const data = useStore((state) => state.contactData)
  const setData = useStore((state) => state.setContactData)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleDeleteButton = (key) => {
    let temp = data.filter((obj) => {
      return obj.key !== key
    })

    setData(temp)
  }

  const handleInputChange = (e) => {
    let text = e.target.value
    setSearchValue(text)
    if (text.length >= 3) {
      setShowClearBtn(true)
      setSearchText(text)
    } else {
      setShowClearBtn(false)
      setSearchText('')
    }
  }

  const handleAddButton = () => {
    navigate('/contact/create')
  }

  let columns = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      title: t('age'),
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: t('action'),
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDeleteButton(record.key)}>{t('delete')}</a>
        </Space>
      ),
    },
  ]

  return (
    <Content>
      <div className="content">
        <h1>{t('nav_contact')}</h1>
        <Input
          value={searchValue}
          placeholder={t('search')}
          style={{ marginTop: '1rem', maxWidth: 500 }}
          onChange={(e) => handleInputChange(e)}
        />
        {showClearBtn ? (
          <Button
            danger
            style={{ marginLeft: '0.5rem' }}
            onClick={() => {
              setSearchText('')
              setSearchValue('')
              setShowClearBtn(false)
            }}
          >
            {t('clear')}
          </Button>
        ) : null}
        <div style={{ float: 'right' }}>
          <Button
            type="primary"
            onClick={handleAddButton}
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            {t('create_new_contact')}
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 20,
          }}
          style={{ marginTop: '1rem' }}
        />
      </div>
    </Content>
  )
}

export default Contact
