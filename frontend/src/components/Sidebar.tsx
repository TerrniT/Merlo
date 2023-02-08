import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { logo, sun } from "../assets/index"
import { navlinks } from "../constants/index"
import { Icon } from "./atoms"

const Sidebar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState<string>("dashboard")

  function handleClick(link: any) {
    if (!link.disabled) {
      setIsActive(link.name)
      navigate(link.link)
    }
  }

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link to='/'>
        <Icon styles='w-20 h-20 bg-zinc-800' imgUrl={logo} />
      </Link>
      <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link: any) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => handleClick(link)}
            />
          ))}
        </div>

        <Icon imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar
