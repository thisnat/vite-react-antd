import { Input, Button, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/store'
import Swal from 'sweetalert2'
import { Content } from 'antd/es/layout/layout'
import { useTranslation } from 'react-i18next'

function CreateContact() {
  const setData = useStore((state) => state.setContactData)
  const contactData = useStore((state) => state.contactData)
  const navigate = useNavigate()
  const { t } = useTranslation()

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
      title: t('contact_add_success'),
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonText: t('go_to_contact_page'),
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/contact')
      }
    })
  }

  return (
    <Content>
      <div className="content">
        <center>
          <h1>{t('create_new_contact')}</h1>
          <Form
            onFinish={onFinish}
            autoComplete="off"
            style={{ marginTop: '1rem', maxWidth: 300 }}
          >
            <Form.Item
              label={t('name')}
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
              label={t('last_name')}
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
              label={t('age')}
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
                {t('create_new_contact')}
              </Button>
            </Form.Item>
          </Form>
        </center>
      </div>
    </Content>
  )
}

export default CreateContact
