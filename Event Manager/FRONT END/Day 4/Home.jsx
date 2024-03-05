import Navbar from "../../compoenets/ui/Navbar"
// import Navabout from "../admin/Navabout"
// import Navhome from "../admin/Navhome"
import Navservices from "../admin/Navservices"
import Navfooter from '../../compoenets/ui/Navfooter'
import Head from '../../pages/user/Head'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Head/>
        <Navservices/>  
        <Navfooter/>
    </div>
  )
}

export default Home
