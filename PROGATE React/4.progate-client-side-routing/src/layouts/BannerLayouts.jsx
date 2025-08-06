import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'

const BannerLayout = () => {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  )
}

export default BannerLayout