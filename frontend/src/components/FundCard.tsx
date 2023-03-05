import { useNavigate } from "react-router-dom"

import { Campaign } from "../types"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { tagType, ethereum, thirdweb } from "../assets"
import { daysLeft } from "../utils"

const FundCard = (campaign: Campaign) => {
  const navigate = useNavigate()

  const handleNavigate = (campaign: Campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  return (
    <div
      className='lg:w-56 xl:w-72 w-full rounded-2xl bg-secondary cursor-pointer'
      onClick={() => handleNavigate(campaign)}
    >
      <img
        src={campaign.image}
        alt='campaign image'
        className='w-full h-52 object-cover rounded-2xl'
      />
      <div className='flex flex-col p-4'>
        <div className='flex items-center mb-4'>
          <img src={tagType} className='w-4 h-4 object-contain' />
          <p className='ml-3 mt-0.5 font-medium text-xs text-gray-500'>Company</p>
        </div>
        <div className='block'>
          <h3 className='font-semibold text-sm text-left text-white leading-6 truncate'>
            {campaign.title}
          </h3>
          <p className='mt-1 font-normal text-xs text-gray-500 text-left'>{campaign.description}</p>
        </div>
        <div className='flex justify-between items-start flex-wrap mt-4 gap-2'>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-sm text-gray-400 leading-5'>
              {campaign.amountCollected}
            </h4>
            <span className='flex gap-2'>
              <p className='mt-1 text-xs text-gray-600 leading-4 sm:max-w-[120px] truncate'>
                Raised of {campaign.target}
              </p>
              <img src={ethereum} className='w-6 h-6 bg-gray-700 rounded-full' />
            </span>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-sm text-gray-400 leading-5'>
              {daysLeft(campaign.deadline)}
            </h4>
            <p className='mt-1 text-xs text-gray-600 leading-4 sm:max-w-[120px] truncate'>
              Days Left{" "}
            </p>
          </div>
        </div>
        <div className='flex items-center mt-5 gap-3'>
          <div className='w-8 h-8 rounded-full flex justify-center items-center bg-toxicyellow'>
            {!campaign.owner ? (
              <img src={thirdweb} alt='user' className='w-1/2 h-1/2 object-contain' />
            ) : (
              <div className='object-contain flex items-center justify-center relative'>
                <Jazzicon diameter={38} seed={jsNumberForAddress(campaign.owner)} />
              </div>
            )}
          </div>
          <p className='flex-1 font-normal text-xs text-gray-600 truncate '>
            by <span className='text-gray-400'>{campaign.owner}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FundCard
