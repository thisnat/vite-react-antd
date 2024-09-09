import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from 'antd'
import CustomHeader from './components/CustomHeader.jsx'
import CustomFooter from './components/CustomFooter.jsx'

import App from './App.jsx'
import Contact from './pages/Contact.jsx'
import CreateContact from './pages/CreateContact.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <CustomHeader />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/create" element={<CreateContact />} />
        </Routes>
        <CustomFooter />
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
