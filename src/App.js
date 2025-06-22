import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import './scss/examples.scss'

import MusteriListesi from './views/musteriler/musteri_listesi'
import YeniMusteriEkle from './views/musteriler/yeni_musteri_ekle'
import Dashboard from './views/dashboard/Dashboard' // Dashboard component import et

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector(state => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }
    if (isColorModeSet()) return
    setColorMode(storedTheme)
  }, [])

  return (
    <Suspense fallback={<CSpinner color="primary" />}>
      <HashRouter>
        <Routes>
          {/* Ortak layout altında alt sayfalar */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="musteriler" element={<MusteriListesi />} />
            <Route path="musteri-ekle" element={<YeniMusteriEkle />} />
            {/* İstersen diğer route'lar */}
          </Route>

          {/* Layout dışı sayfalar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />

          {/* Yakalayamadığı sayfalar için 404 yönlendirmesi */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App
