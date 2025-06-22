import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilNotes,
  cilSpeedometer,
  cilStar,
  cilExternalLink,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    component: CNavItem,
    name: 'Panel',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    component: NavLink,
  },
  {
    component: CNavTitle,
    name: 'Araçlar',
  },
  {
    component: CNavGroup,
    name: 'Müşteriler',
    items: [
      {
        component: CNavItem,
        name: 'Müşteri Listesi',
        to: '/musteriler',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Yeni Müşteri Ekle',
        to: '/musteri-ekle',
        component: NavLink,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'İş Ortakları',
    items: [
      {
        component: CNavItem,
        name: 'İş Ortağı Listesi',
        to: '/partners',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Yeni İş Ortağı Ekle',
        to: '/partners/create',
        component: NavLink,
      },
    ],
  },
    
  {
    component: CNavGroup,
    name: 'Ürünler',
    items: [
      {
        component: CNavItem,
        name: 'Ürün Listesi',
        to: '/urunler/urun-listesi',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Yeni Ürün Ekle',
        to: '/urunler/yeni-urun-ekle',
        component: NavLink,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Lisanslar',
    to: '/lisans',
    component: NavLink,
  },
  {
    component: CNavItem,
    name: 'Ödeme İşlemleri',
    to: '/odemeler',
    component: NavLink,
  },
  
]

export default _nav
