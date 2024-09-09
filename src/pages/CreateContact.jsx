import { Input, Button, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/store'
import Swal from 'sweetalert2'
import { Content } from 'antd/es/layout/layout'

function CreateContact() {
  const setData = useStore((state) => state.setContactData)
  const contactData = useStore((state) => state.contactData)
  const navigate = useNavigate()

  const onFinish = (values) => {
    let random = (Math.random() + 1).toString(36).substring(7)

    setData([
      {
        key: random,
        name: values.name + ' ' + values.lastname,
        age: values.age,
      },
      ...contactData,
    ])

    Swal.fire({
      title: 'Add success!',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonText: 'Go to contact page',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/contact')
      }
    })
  }

  return (
    <Content>
      <div className="content">
        <h1>Create Contact</h1>
        <Form
          onFinish={onFinish}
          autoComplete="off"
          style={{ marginTop: '1rem' }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}

export default CreateContact
