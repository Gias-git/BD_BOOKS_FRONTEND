import { Outlet } from "react-router"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="min-h-[100vh] bg-gray-100 flex flex-col justify-between">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App