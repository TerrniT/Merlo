import { Campaign } from "../types"
import CampaignSkeleton from "./CampaignSkeleton"
import FundCard from "./FundCard"

type Props = {
  title: string
  isLoading: boolean
  campaigns: Campaign[]
}

const DisplayCampaigns = ({ title, isLoading, campaigns }: Props) => {

  return (
    <div>
      <h1 className='font-semibold text-lg text-white text-left'>
        {title} ({campaigns.length})
      </h1>
      <div className='flex flex-wrap mt-5 gap-6 xl:gap-10 md:justify-center xl:justify-start'>
        {isLoading && <CampaignSkeleton />}
        {!isLoading && campaigns.length === 0 && (
          <p className='font-semibold text-zinc-500 text-lg leading-8'>
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => <FundCard key={campaign.pId} {...campaign} />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns
