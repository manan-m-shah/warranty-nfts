import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider';
import { returnShortAddress } from '../utils/functions';
import { connectToMetamask } from '../utils/user';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className='relative'>
      <button
        className='absolute top-4 right-4 px-8 py-3 rounded-lg bg-gradient-primary text-white'
        onClick={() => connectToMetamask(dispatch)}>
        {state.user ? returnShortAddress(state.user) : "Connect"}
      </button>
    </div>
  )
}

export default Navbar