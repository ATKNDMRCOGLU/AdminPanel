import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CForm, CFormInput, CButton } from '@coreui/react'

const AddCustomer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Yeni müşteri eklendi:\nAd: ${name}\nEmail: ${email}`)
    // Burada API'ye POST isteği atılabilir
    setName('')
    setEmail('')
  }

  return (
    <CCard>
      <CCardHeader>Yeni Müşteri Ekle</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            type="text"
            label="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />
          <CFormInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
          />
          <CButton type="submit" color="success">Kaydet</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default AddCustomer
