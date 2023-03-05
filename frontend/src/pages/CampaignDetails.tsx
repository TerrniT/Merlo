import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ethers } from "ethers"
import { useThirdWebContext } from "../context"
import { Button } from "../components/atoms"
import { calculateBarPercentage, daysLeft } from "../utils"
import { thirdweb } from "../assets"

const CampaignDetails = () => {
  const { state } = useLocation()


  return <div>CampaignDetails</div>
}

export default CampaignDetails
