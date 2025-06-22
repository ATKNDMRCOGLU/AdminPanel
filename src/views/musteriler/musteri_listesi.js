import React from 'react'
import { CCard, CCardHeader, CCardBody, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton } from '@coreui/react'
import { Link } from 'react-router-dom'

const CustomerList = () => {
  const customers = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com' },
  ]

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <h5>Müşteriler</h5>
        <Link to="/customers/add">
          <CButton color="primary">Yeni Müşteri</CButton>
        </Link>
      </CCardHeader>
      <CCardBody>
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Ad</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {customers.map((c) => (
              <CTableRow key={c.id}>
                <CTableHeaderCell>{c.id}</CTableHeaderCell>
                <CTableDataCell>{c.name}</CTableDataCell>
                <CTableDataCell>{c.email}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default CustomerList
