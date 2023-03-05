import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers"
import { money } from "../assets"
import { Button, FormField } from "../components/atoms"
import { checkIfImage } from "../utils"
import { useThirdWebContext } from "../context"
import { CreateDialog } from "../components"

const CreateCampaign = () => {
  const { createCampaign } = useThirdWebContext()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  })

  const handleFormFieldChange = (fieldName: string, e: any) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        try {
          setIsLoading(true)
          await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
          setIsLoading(false)
        } catch (error) {
          alert("Provide valid image URL")
          console.log(error);
          setForm({ ...form, image: "" })
        } finally {
          setIsSuccess(true)
        }
      }
    })
  }

  return (
    <div className='bg-secondary justify-center items-center flex-col rounded-xl sm:p-10 p-4'>
      {isLoading && <CreateDialog />}
      {isSuccess && <CreateDialog isSuccess={isSuccess} />}
      <div className='flex justify-center items-center p-4 sm:mix-w-[380px] bg-zinc-700 rounded-xl'>
        <h1 className='font-bold sm:text-2xl text-xl leading-9 text-white'>Start a Campaign</h1>
      </div>
      <form className='w-full mt-16 flex flex-col gap-8 ' onSubmit={handleSubmit}>
        <div className='flex flex-wrap gap-10 '>
          <FormField
            labelName='Your Name *'
            placeholder='John Doe'
            inputType='text'
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName='Campaign Title *'
            placeholder='Write a Title'
            inputType='text'
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>
        <FormField
          labelName='Story *'
          placeholder='Write your story'
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />
        <div className='w-full flex justify-start items-center p-4 bg-toxicyellow/20 border-[2px] border-toxicyellow h-28 rounded-xl'>
          <img src={money} alt='money_bag' className='w-10 object-contain h-10' />
          <h4 className='font-bold text-2xl text-white ml-5'>
            Your will get 100% of the raised amount
          </h4>
        </div>
        <div className='flex flex-wrap gap-10 '>
          <FormField
            labelName='Goal *'
            placeholder='ETH 0.50'
            inputType='text'
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName='End Date *'
            placeholder='End Date'
            inputType='date'
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>
        <FormField
          labelName='Campaign Image *'
          placeholder='Place image URL of your campaign'
          inputType='url'
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />
        <div className='flex justify-center items-center mt-10 '>
          <Button
            title='Submit new campaign'
            type='button'
            onClick={handleSubmit}
            className='bg-toxicyellow/40  border-[2px] border-toxicyellow text-toxicyellow hover:bg-toxicyellow/100 hover:text-black transition-all duration-300'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign
