import React, { useContext, createContext, ReactNode } from "react"

import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react"

import { ethers } from "ethers"

const ThirdWebContext = createContext<any>("")

interface IThirdWebContext {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

export const ThirdWebContextProvider = ({ children }: IThirdWebContext) => {
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
  return (
    <ThirdWebContext.Provider
      value={{ address, connect, contract, createCampaign: publishCampaign }}
    >
      {children}
    </ThirdWebContext.Provider>
  )
}

export const useThirdWebContext = () => useContext(ThirdWebContext)
