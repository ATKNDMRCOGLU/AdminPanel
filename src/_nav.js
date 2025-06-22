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
        to: '/musteriler', // 🔧 DÜZELTİLDİ
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
        to: '/isortaklari/is-ortaklari-listesi',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Yeni İş Ortağı Ekle',
        to: '/isortaklari/yeni-is-ortagi-ekle',
        component: NavLink,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: (
          <>
            Multi Select
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: { color: 'danger', text: 'PRO' },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
        component: NavLink,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    component: NavLink,
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
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
        component: NavLink,
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
        component: NavLink,
      },
    ],
  },
]

export default _nav
