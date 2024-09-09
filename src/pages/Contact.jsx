import { Space, Table, Input } from 'antd'
import { useState } from 'react'

const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '11',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '12',
    name: 'Joe Black',
    age: 32,
  },
]

function Contact() {
  const [data, setData] = useState(mockData)
  const [searchText, setSearchText] = useState('')

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
