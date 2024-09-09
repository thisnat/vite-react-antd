import { Space, Table, Input, Button } from 'antd'
import { useState } from 'react'
import useStore from '../store/store'
import { useNavigate } from 'react-router-dom'

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
    <>
      <div>
        <h1>Contact</h1>
        <Input
          placeholder="Search"
          style={{ marginTop: '1rem' }}
          onChange={(e) => handleInputChange(e)}
        />
        <Button type="primary" onClick={handleAddButton}>
          Add
        </Button>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: false,
            pageSizeOptions: ['10'],
          }}
          style={{ marginTop: '1rem' }}
        />
      </div>
    </>
  )
}

export default Contact
