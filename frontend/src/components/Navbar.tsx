import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/atoms"

import { logo, menu, search, thirdweb } from "../assets"
import { navlinks } from "../constants"

const Navbar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState<string>("dashboard")
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  // hardcoded address
  const address = "0x3123123..."

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 '>
      <div className='flex lg:flex-1 flex-row max-w-lg py-2 pl-4 pr-2 h-12 bg-secondary rounded-2xl ring-1 ring-white'>
        <input
          placeholder='Search for campaign'
          type='text'
          className='flex w-full font-normal text-sm placeholder:text-gray-500 text-white bg-transparent  outline-none'
        />
        <div className='w-16 h-full rounded-2xl bg-toxicyellow  flex justify-center items-center cursor-pointer'>
          <img className='w-4 h-4 object-contain' alt='search' src={search} />
        </div>
      </div>
      <div className='hidden sm:flex flex-row justify-end gap-4'>
        <Button
          title={address ? "Create a campaign" : "Connect To Wallet"}
          className={!address ? "bg-toxicyellow" : "bg-transparent ring-1 ring-toxicyellow "}
          onClick={() => {
            if (address) navigate("create-campaign")
            else console.log("connect to wallet")
          }}
        />
        <Link to='/profile'>
          <div className='w-12 h-12 rounded-xl bg-black ring-1 ring-toxicyellow flex justify-center items-center'>
            <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
