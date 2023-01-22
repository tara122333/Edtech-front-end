import React from 'react'

const Error404 = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className="py-12">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <h2 className="text-lg font-medium text-gray-600">Page Not Found</h2>
                <p className="mt-4 text-gray-500">Sorry, the page you're looking for could not be found.</p>
            </div>
        </div>
    </>
  )
}

export default Error404