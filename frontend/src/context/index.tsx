import React, { useContext, createContext } from "react"

import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react"

import { ethers } from "ethers"
import { Campaign, Donators } from "../types"

const ThirdWebContext = createContext<any>({})

interface Props {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

export const ThirdWebContextProvider = ({ children }: Props) => {
  const { contract } = useContract("0xeDBf9EDc163F1CB61a9F684352901442f54311Cc")
  const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign")

  const address = useAddress()
  const connect = useMetamask()

  const publishCampaign = async (form: any) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ])
      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const donate = async (pId: Campaign, amount: string) => {
    try {
      if (contract) {
        const data = await contract.call("donateToCampaign", pId, {
          value: ethers.utils.parseEther(amount),
        })
        return data
      }
    } catch (error) {
      console.log("@@@: Can't donate to campaign", error)
    }
  }

  const getDonations = async (pId: Campaign): Promise<Donators[] | undefined> => {
    try {
      if (contract) {
        const donations = await contract.call("getDonators", pId)
        const numberOfDonations = donations[0].length

        const parsedDonations: Donators[] = []
        for (let i = 0; i < numberOfDonations; i++) {
          parsedDonations.push({
            donator: donations[0][i],
            donation: ethers.utils.formatEther(donations[1][i].toString()),
          })
        }

        return parsedDonations
      }
    } catch (error) {
      console.log("@@@: Can't get donations", error)
    }
  }

  const getCampaigns = async (form: any) => {
    try {
      if (contract) {
        const campaigns = await contract.call("getCampaigns")

        const parseCampaigns: Campaign = campaigns.map((campaign: Campaign, index: any) => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.utils.formatEther(campaign.target.toString()),
          deadline: Number(campaign.deadline),
          amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
          image: campaign.image,
          pId: index,
        }))

        return parseCampaigns
      } else {
        console.log("something went wrong")
      }
    } catch {
      console.log("contract call failure")
    }
  }

  return (
    <ThirdWebContext.Provider
      value={{
        address,
        connect,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
        getDonations,
        donate,
      }}
    >
      {children}
    </ThirdWebContext.Provider>
  )
}

export const useThirdWebContext = () => useContext(ThirdWebContext)
