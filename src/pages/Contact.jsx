import { Space, Table, Input, Button } from 'antd'
import { useState } from 'react'
import useStore from '../store/store'
import { useNavigate } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'

function Contact() {
  const [searchText, setSearchText] = useState('')
  const data = useStore((state) => state.contactData)
  const setData = useStore((state) => state.setContactData)
  const navigate = useNavigate()

  const handleDeleteButton = (key) => {
    let temp = data.filter((obj) => {
      return obj.key !== key
    })

    setData(temp)
  }

  const handleInputChange = (e) => {
    let text = e.target.value
    if (text.length >= 3) {
      setSearchText(text)
    } else {
      setSearchText('')
    }
  }

  const handleAddButton = () => {
    navigate('/contact/create')
  }

  let columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDeleteButton(record.key)}>Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <Content>
      <div className="content">
        <h1>Contact</h1>
        <Input
          placeholder="Search"
          style={{ marginTop: '1rem' }}
          onChange={(e) => handleInputChange(e)}
        />
        <div style={{ float: 'right' }}>
          <Button
            type="primary"
            onClick={handleAddButton}
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            Create new contact
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
