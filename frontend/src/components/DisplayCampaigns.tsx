import { loader } from '../assets'
import { Campaign } from '../types'
import FundCard from './FundCard'

type Props = {
  title: string
  isLoading: boolean
  campaigns: Campaign[]
}

const DisplayCampaigns = ({ title, isLoading, campaigns }: Props) => {

  console.log("rerender");

  return (
    <div>
      <h1 className='font-semibold text-lg text-white text-left'>{title} ({campaigns.length})</h1>
      <div className='flex flex-wrap mt-5 gap-6'>
        {isLoading && (
          <img src={loader} alt="loader" className='w-24 h-24 object-contain' />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className='font-semibold text-zinc-500 text-lg leading-8'>You have not created any campaigns yet</p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => (<FundCard key={campaign.pId} {...campaign} />))}
      </div>
    </div>
  )
}

export default DisplayCampaigns
