import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import {useDispatch} from 'react-redux';

import { signUp } from '../../Redux/Reducer/Auth/auth.action';

export default function SignUp({isOpen,setIsOpen}) {

    const [userData,setUserData] = useState({
        email : "",
        password : "",
        fullname : ""
    });
    
    const handleChange = (e) => setUserData((prev)=>({
        ...prev,
        [e.target.id] : e.target.value
    }));


    const dispatch = useDispatch();

    const submit = () => {
      setUserData({
        email: "",
        password: "",
        fullname: "",
      });
      dispatch(signUp(userData));
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
                    User SignUp
                  </Dialog.Title>

                  <div className='flex flex-col gap-5 my-5'>
                    <div className='px-5 py-2 bg-red-500 rounded-sm flex justify-center items-center text-white cursor-pointer'>
                      <span>Login With Google</span>
                    </div>

                    <div>
                        <form className="flex flex-col gap-3">
                            <div className=" w-full flex flex-col gap-2">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" name="fullname" 
                                id="fullname"
                                value={userData.fullname} 
                                onChange={handleChange}
                                placeholder="Tara Chand Kumawat"
                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <div className=" w-full flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" 
                                id="email" 
                                value={userData.email}
                                onChange={handleChange} 
                                placeholder="tara@emai.com"
                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="*********"
                                    name="password"
                                    value={userData.password} 
                                    onChange={handleChange}
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <div onClick={submit} className="w-full  text-center bg-red-500 text-white py-2 rounded-lg">
                                Sign Up
                            </div>
                        </form>
                    </div>
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
