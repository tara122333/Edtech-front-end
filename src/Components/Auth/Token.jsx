import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Token({isOpen,setIsOpen}) {

    const [tokenData,setTokenData] = useState({
        user_token : "",
    });
    
    const handleChange = (e) => setTokenData((prev)=>({
        ...prev,
        [e.target.id] : e.target.value
    }));

    const submit = () => {

      if(tokenData.user_token === "TARA"){
        localStorage.setItem(
          "tokenData",
          JSON.stringify({token : tokenData.user_token})
        );    
        window.location.reload();
        toast.success("Success Token")
      }
      else{
        toast.error("Invalid Token")
        console.log("Token are not matches");
      }
        
    };



  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    User Access Tab
                  </Dialog.Title>
                  <div>
                  <div className='flex flex-col gap-5 my-5'>
                            <div className=" w-full flex flex-col gap-2">
                                <span className='text-lg font-semibold'>Enter Token</span>
                                <input type="text" 
                                name="user_token" 
                                id="user_token"
                                value={tokenData.user_token} 
                                onChange={handleChange}
                                placeholder="TXR****T"
                                className="w-full border px-3 py-2 rounded-lg focus:border-red-500 border-purple-500 outline-purple-500"
                                />
                            </div>

                            <div className='flex gap-3'>
                              <div onClick={submit} className="w-full text-center bg-purple-500 text-white py-2 rounded-lg cursor-pointer font-semibold">
                                  Access
                              </div>
                              <a href=' https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIuTIyJrTm0IwG7Qne8PjvxFk4cy9Mz5wScD0GM71ewgHsNw/alreadyresponded?usp=sf_link' target={"_blank"} className='w-full text-center bg-purple-500 text-white py-2 rounded-lg cursor-pointer font-semibold'>
                                  Generate Token
                              </a>
                            </div>
                        </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </>
  )
}
