const CampaignMask = () => {
  return (
    <div
      className='lg:w-56 xl:w-72 w-full rounded-2xl bg-zinc-800 animate-pulse '
    >
      <div
        className='w-full h-52 object-cover rounded-2xl bg-zinc-700/80'
      >
      </div>
      <div className='flex flex-col p-4'>
        <div className='flex items-center mb-4'>
          <div className='w-4 h-4 object-contain rounded-2xl bg-zinc-600'></div>
          <div className=' mt-1 rounded-md bg-zinc-600 h-2 ml-4 w-12'></div>
        </div>
        <div className='block'>
          <div className='rounded-md bg-zinc-600 h-4 w-full'></div>
          <div className='mt-3 rounded-md bg-zinc-600 h-3 w-2/3'></div>
        </div>
        <div className='flex justify-between items-start flex-wrap mt-4 gap-2'>
          <div className='flex flex-col'>
            <div className=' mt-1 rounded-md bg-zinc-700 h-5 w-6'>
            </div>
            <span className='flex gap-2 mt-1 items-center'>
              <div className='rounded-md h-4 bg-zinc-700 w-16'>
              </div>
              <div className='w-6 h-6 bg-zinc-700 rounded-full'></div>
            </span>
          </div>
          <div className='flex flex-col w-1/2 justify-end mt-2'>
            <div className='rounded-md h-4 bg-zinc-700 w-14 self-end'>
            </div>
            <div className='mt-2 h-4 rounded-md bg-zinc-700 w-14 self-end'>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-5 gap-4'>
          <div className='w-8 h-8 rounded-full flex justify-center items-center bg-zinc-700'>
            <div className='w-10 h-1/2 object-contain'></div>
          </div>
          <div className='mt-1 h-3 rounded-md bg-zinc-700 w-full'>
          </div>
        </div>
      </div>
    </div>
  )

}

const CampaignSkeleton = () => {
  return (

    <div className='flex flex-wrap mt-5 gap-6 xl:gap-10 md:justify-center xl:justify-start'>
      <CampaignMask />
      <CampaignMask />
      <CampaignMask />
      <CampaignMask />
      <CampaignMask />
      <CampaignMask />
    </div>
  )
}

export default CampaignSkeleton 
