import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/atoms"
import { useThirdWebContext } from "../context"

import { menu, metamask, profile, search, son } from "../assets"
import { navlinks } from "../constants"
import Jazzicon from "react-jazzicon/dist/Jazzicon"
import { jsNumberForAddress } from "react-jazzicon"

const Navbar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState<string>("dashboard")

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  const { connect, address } = useThirdWebContext()

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 sticky top-0 z-40 backdrop-blur-md p-3  bg-zinc-900/70'>
      <div className='flex lg:flex-1 flex-row max-w-lg py-2 pl-4 pr-2 h-12 bg-secondary rounded-2xl ring-1 ring-zinc-700'>
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
          icon={address ? null : metamask}
          className={
            address
              ? "bg-toxicyellow text-black font-semibold px-4 py-3"
              : "bg-transparent ring-1 ring-toxicyellow font-semibold py-3 px-4 "
          }
          onClick={() => {
            if (address) navigate("create-campaign")
            else connect()
          }}
        />
        <Link to='/profile'>
          <div className='w-12 h-12 rounded-md bg-black ring-2 ring-toxicyellow flex justify-center items-center'>
            {address ? (
              <Jazzicon diameter={45} seed={jsNumberForAddress(address)} />
            ) : (
              <img src={profile} alt='user' className=' h-6 w-6 object-contain rounded-md' />
            )}
          </div>
        </Link>
      </div>
      <div className='sm:hidden flex justify-between items-center relative '>
        <div className='w-10 h-10 rounded-md bg-black ring-4 ring-toxicyellow flex justify-center items-center cursor-pointer'>
          <img src={son} alt='user' className='w-full object-contain rounded-md' />
        </div>
        <img
          alt='menu'
          src={menu}
          className='w-8 h-8 object-contain cursor-pointer'
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
      </div>
      <div
        className={`absolute top-[70px] right-0 left-0 bg-primary/80 z-10 ring-1 ring-white  ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-500 filter backdrop-blur-xl py-4  `}
      >
        <ul className='mb-4'>
          {navlinks.map((link: any) => (
            <li
              key={link.name}
              className={`flex p-4 w-full rounded-xl ${isActive === link.name && "bg-secondary"}`}
              onClick={() => {
                setIsActive(link.name)
                setToggleDrawer(false)
                navigate(link.link)
              }}
            >
              <img
                src={link.imgUrl}
                className={`w-6 h-6 object-contain ${isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
              />
              <p
                className={`ml-5 font-semibold text-sm  ${isActive === link.name ? "text-toxicyellow" : "text-slate-100"
                  }`}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>
        <div className='flex mx-2 '>
          <Button
            title={address ? "Create a campaign" : "Connect To Wallet"}
            icon={address ? null : metamask}
            className={
              address
                ? "bg-toxicyellow text-black font-semibold px-4 py-3"
                : "bg-transparent ring-1 ring-toxicyellow font-semibold py-3 px-4 "
            }
            onClick={() => {
              if (address) navigate("create-campaign")
              else connect()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
