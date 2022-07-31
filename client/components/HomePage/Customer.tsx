import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppProvider'
import { addNewMerchant } from '../../utils/user'

type Props = {
  isMerchant: boolean,
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>,
  isCustomer: boolean,
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>,
}

type CustomerHeadingProps = {
  isCustomer: boolean,
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>,
}

type MerchantFormProps = {
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>,
}

const Customer = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const { isMerchant, setIsMerchant, isCustomer, setIsCustomer } = props;

  const router = useRouter();

  useEffect(() => {
    console.log('state', state);
    if (state.merchant.name) {
      router.push('/merchant');
    }
  }, [state])

  return (
    <div className='flex flex-col justify-center rounded-xl max-w-lg w-full text-gray-600'>
      {props.isMerchant ? <MerchantForm setIsMerchant={setIsMerchant} /> : <RegisterAsCustomerDiv isCustomer={isCustomer} setIsCustomer={setIsCustomer} />}
    </div>
  )
}

const RegisterAsCustomerDiv = (props: CustomerHeadingProps) => {
  const { isCustomer, setIsCustomer } = props;
  return (
    <div className={'w-full duration-500 ease-in-out ' + (isCustomer ? 'translate-y-8' : '')}>
      <div className='text-5xl font-bold'>Register as Customer</div>
      {/*
        // list of features that the customer will enjoy
        // 1. Gain true ownership of your product
        // 2. Never worry about warranties again
        // 3. Get loyalty points for every purchase
        // 4. Get extended warranties for free
      */}
      <ul className='text-xl gap-y-4 flex flex-col mt-8 list-disc ml-8' >
        <li>Gain true ownership of your product</li>
        <li>Never worry about warranties again</li>
        <li>Get loyalty points for every purchase</li>
        <li>Get extended warranties for free</li>
      </ul>

      <button
        className={'mt-16 bg-gray-600 text-white rounded-xl p-4 w-full duration-500 ease-in-out ' + (isCustomer ? 'opacity-0' : 'opacity-100')}
        onClick={() => { setIsCustomer(true) }}
      >
        Register
      </button>
    </div>
  )
}

const MerchantForm = (props: MerchantFormProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { setIsMerchant } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='flex flex-col justify-center rounded-xl w-full'>
      <div className='card-pop-in border-4 boder-white p-16 flex flex-col gap-y-4 mt-8 w-full'>
        <div className='flex flex-col'>
          <label className='text-lg'>Name</label>
          <input className='border-2 border-gray-300 rounded-lg p-2 outline-cyan-500' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label className='text-lg'>Email</label>
          <input className='border-2 border-gray-300 rounded-lg p-2 outline-cyan-500' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className='flex w-full gap-x-4'>
        <button
          className='mt-16 text-white rounded-lg bg-gray-600 text-lg p-4 w-full'
          onClick={() => { setIsMerchant(false) }}
        >
          Go Back
        </button>
        <button
          className='mt-16 text-white rounded-lg bg-color-primary text-lg p-4 w-full'
          onClick={() => {
            addNewMerchant(name, email, state, dispatch);
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Customer