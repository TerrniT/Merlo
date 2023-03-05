import { useState } from "react"
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
    <div className='flex justify-between items-center rounded-2xl flex-col sticky top-4 h-[93vh]'>
      <Link to='/' className=' flex justify-center items-center '>
        <Icon styles='w-12 h-12  bg-secondary ' imgUrl={logo} />
      </Link>
      <div className='flex-1 flex flex-col justify-between items-center  bg-secondary rounded-[20px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3 '>
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
