import React from 'react'

const Navbar = () => {
  return (
    <div className='grid p-6 bg-color-base h-fit'>
      <div className='card-pop-out-small p-1 justify-self-end'>
        <button
          className='p-3 rounded-lg bg-gray-200'>
          Connect
        </button>
      </div>
    </div>
  )
}

export default Navbar