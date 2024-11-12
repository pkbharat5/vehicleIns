import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{minHeight:'90vh'}} className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout