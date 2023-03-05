import { Route, Routes } from "react-router-dom"
import { Navbar, Sidebar } from "./components"
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages"

const App = () => {
  return (
    <div className='relative sm:-8 lg:p-4 p-0 bg-zinc-900  min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative '>
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px]relative mx-auto  sm:pr-5'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-campaign' element={<CreateCampaign />} />
          <Route path='/campaign-details/:id' element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
