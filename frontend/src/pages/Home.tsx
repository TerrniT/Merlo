import React, { useState, useEffect } from "react"
import { useThirdWebContext } from "../context"
import { DisplayCampaigns } from "./../components/index"

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [campaigns, setCampaigns] = useState<any[]>([])

  const { address, contract, getCampaigns } = useThirdWebContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns()
    setIsLoading(false)
    setCampaigns(data)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address, contract])

  return <DisplayCampaigns title='All Campaigns' isLoading={isLoading} campaigns={campaigns} />
}

export default Home
