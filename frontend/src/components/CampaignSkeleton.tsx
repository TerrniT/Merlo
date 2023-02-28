import React from "react"

const CampaignSkeleton = () => {
  return (
    <div className='bg-secondary h-screen animate-pulse justify-center items-center grid grid-cols-2 gap-4 rounded-xl sm:p-10 p-4'>
      <div className='h-[50%] w-full bg-black'></div>
      <div className='h-[50%] w-full bg-black'></div>
      <div className='h-[50%] w-full bg-black'></div>
    </div>
  )
}

export default CampaignSkeleton
