import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ethers } from "ethers"
import { useThirdWebContext } from "../context"
import { Button, CountBox, ProfileIcon } from "../components/atoms"
import { calculateBarPercentage, daysLeft } from "../utils"
import { thirdweb } from "../assets"

const CampaignDetails = () => {
  const { state } = useLocation()

  const { getDonations, cotract, address } = useThirdWebContext()

  const [isLoading, setisLoading] = useState<boolean>(false)
  const [amount, setAmount] = useState<string>('')
  const [donators, setDonators] = useState<string[]>([])

  const remainingDays = daysLeft(state.deadline)

  const handleDonate = async () => {

  }

  return (
    <div>
      {isLoading && <p className="text-white font-bold text-2xl">Loading...</p>}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-8">
        <div className="flex-1 flex-col ">
          <img src={state.image} alt="campaign" className="w-full h-[510px] object-cover ring ring-zinc-600 rounded-xl " />
          <div className="relative w-full h-3 bg-zinc-700 mt-3 rounded-xl">
            <div className="absolute h-full  bg-toxicyellow " style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%' }}></div>
          </div>
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-8">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>
      <div className="mt-14 flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-10 ">
          <div className="">
            <h4 className='font-bold text-3xl text-white py-3 w-full text-left truncate uppercase'>Creator</h4>
            <div className="mt-5 flex items-center gap-4  ">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-700">
                <ProfileIcon owner={state.owner} />
              </div>
              <div>
                <h4 className="text-white break-all font-medium text-sm">{state.owner}</h4>
                <p className="text-toxicyellow text-xs font-bold mt-2">10 Campaings</p>
              </div>
            </div>
          </div>

          <div className="">
            <h4 className='font-bold text-3xl text-white  w-full text-left truncate uppercase'>Story</h4>
            <div className="mt-5">
              <p className="text-gray-700 text-xs font-bold leading-7 text-justify">{state.description}</p>
            </div>
          </div>

          <div className="">
            <h4 className='font-bold text-3xl text-white  w-full text-left truncate uppercase'>Donators</h4>
            <div className="mt-5 flex flex-col gap-4">
              {donators.length > 0 ? donators.map((donator, index) => (
                <div>Donator</div>
              )) : (
                <p className="text-gray-700 text-xs font-bold leading-7 text-justify">No donators yet. Be the first one!</p>
              )}

            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <h4 className='font-bold text-3xl text-white  w-full text-left truncate uppercase'>Fund</h4>
          <div className="mt-5 flex flex-col p-4 bg-secondary rounded-lg">
            <p className="font-medium text-lg leading-8 text-center text-gray-500">
              Fund the campaign
            </p>
            <div className="mt-8">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-3 s:px-5 px-4 outline-none border-[1px] border-zinc-700 bg-transparent rounded-xl text-white text-lg leading-8 placeholder:text-gray-600"
                value={amount}
                onChange={((e) => setAmount(e.target.value))}
              />
              <div className="mt-5 p-4 bg-black/90 rounded-lg">
                <h4 className="text-center text-white text-sm font-semibold leading-6">Back it because you believe in it</h4>
                <p className="text-center text-gray-600 text-xs font-medium leading-6 mt-1">Support the project for no reward</p>
              </div>
              <Button title="Fund Campaign" className="w-full mx-auto mt-4 bg-rose-700 hover:bg-rose-800 transition-all duration-200" onClick={handleDonate} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CampaignDetails
