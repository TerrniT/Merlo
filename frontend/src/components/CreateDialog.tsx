import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { FaCheck, FaSpinner } from "react-icons/fa"
import useModal from "../hooks/useModal"
import { useNavigate } from "react-router-dom"

interface Props {
  isSuccess?: boolean
}

const CreateDialog = ({ isSuccess }: Props) => {
  const [isShowing, toggle] = useModal()

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <>
      <Transition appear show={isShowing as boolean} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggle as () => void}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary border border-gray-800  p-6 text-left align-middle shadow-xl transition-all">
                  {isSuccess ? (
                    <div className='rounded-full w-14 h-14 my-6 text-green-500 flex items-center justify-center mx-auto '>
                      <FaCheck className='text-5xl' />
                    </div>
                  ) : (
                    <div className=' rounded-full w-14 h-14 my-6 text-blue-500 flex items-center justify-center mx-auto '>
                      <FaSpinner className='text-5xl animate-spin' />
                    </div>
                  )}
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-bold leading-6 text-white"
                  >
                    {isSuccess ? ("Success!") : ("Awaiting Validation")}

                  </Dialog.Title>
                  {isSuccess ? (
                    <div className="mt-2 ">
                      <p className="text-sm text-center text-gray-500">
                        Your campaign has been successfully created.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-2 ">
                      <p className="text-sm text-center text-gray-500">
                        It might takes some time to transfer gas, Please wait
                      </p>
                    </div>
                  )}
                  <div className="mt-6 mb-6 flex justify-center">
                    {isSuccess && (
                      <button
                        type="button"
                        className="inline-flex w-full bg-green-500/20 backdrop-blur-sm border border-green-500 justify-center rounded-md  px-4 py-2 text-sm font-medium text-green-500 hover:bg-green-800 transition-all duration-200  focus:outline-none focus-visible:ring-0 focus-visible:ring-green-500 "
                        onClick={handleNavigate}
                      >
                        View!
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default CreateDialog
