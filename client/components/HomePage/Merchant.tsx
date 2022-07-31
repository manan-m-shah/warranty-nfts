import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppProvider'
import notify from '../../utils/notify'
import { addNewCustomer } from '../../utils/user'

// if isCustomer is true, then the customer form will be shown
// if isCustomer is false, then show a heading that says 'Register as a Merchant'

type Props = {
  isCustomer: boolean,
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>,
  isMerchant: boolean,
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>,
}

type MerchantHeaderProps = {
  isMerchant: boolean,
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>,
}

type CustomerFormProps = {
  isCustomer: boolean,
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>,
}

const Merchant = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const { isCustomer, setIsCustomer, isMerchant, setIsMerchant } = props;

  const router = useRouter();

  useEffect(() => {
    console.log('state', state);
    if (state.customer.name) {
      router.push('/customer');
    }
  }, [state])

  return (
    <div className='flex flex-col justify-center rounded-xl max-w-lg w-full'>
      {isCustomer ? <CustomerForm isCustomer={isCustomer} setIsCustomer={setIsCustomer} /> : <RegisterAsMerchantDiv isMerchant={isMerchant} setIsMerchant={setIsMerchant} />}
    </div>
  )

}

const RegisterAsMerchantDiv = (props: MerchantHeaderProps) => {
  const { isMerchant, setIsMerchant } = props;
  return (
    <div className={'w-full duration-500 ease-in-out ' + (isMerchant ? 'translate-y-8' : '')}>
      <div className='text-5xl font-bold text-color-primary'>Register as Merchant</div>
      {/*
       // list of features that the merchant will get
        // 1. Hassel free warranty management for your company
        // 2. Easy to use interface
        // 3. Easy tracking of warranty status
        // 4. Run early access programs
      */}
      <ul className='text-xl gap-y-4 flex flex-col mt-8 list-disc ml-8' >
        <li>Hassle free warranty management</li>
        <li>Easy to use interface</li>
        <li>Easy tracking of warranty status</li>
        <li>Run early access programs</li>
      </ul>
      <button
        className={'mt-16 text-white bg-color-primary text-lg rounded-xl w-full p-4 duration-500 ease-in-out ' + (isMerchant ? 'opacity-0' : 'opacity-100')}
        onClick={() => { setIsMerchant(true) }}
      >
        Register
      </button>
    </div>
  )
}

const CustomerForm = (props: CustomerFormProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { setIsCustomer } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // form fields
  // 1. Name with label
  // 2. Email with label
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
          onClick={() => { setIsCustomer(false) }}
        >
          Go Back
        </button>
        <button
          className='mt-16 text-white rounded-lg bg-color-primary text-lg p-4 w-full'
          onClick={() => {
            addNewCustomer(name, email, state, dispatch);
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Merchant