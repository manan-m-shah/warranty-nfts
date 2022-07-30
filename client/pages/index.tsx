import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import Merchant from '../components/HomePage/Merchant';
import Customer from '../components/HomePage/Customer';

// this screen should be the first screen the user sees
// it should have two divisions, one to register as a merchant, and one to register as a customer
// the user will have to choose one of the two options, register as a merchant on the left, or register as a customer on the right
// if they choose to register as a merchant, the right side of the screen will show a form to fill out
// if they choose to register as a customer, the left side of the screen will show a form to fill out
// the form will have a field for the user's name, a field for the user's email
// the switching between two form will have animations to make it look cool

const styles = {
  selectorDiv: 'flex w-full justify-center h-full ',
}

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isMerchant, setIsMerchant] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  return (
    <div className='w-screen h-screen grid grid-cols-2 justify-center'>
      <div className={styles.selectorDiv}>
        <Merchant isCustomer={isCustomer} setIsCustomer={setIsCustomer} isMerchant={isMerchant} setIsMerchant={setIsMerchant} />
      </div>
      {/* vertical divider */}
      <div className={styles.selectorDiv}>
        <Customer isCustomer={isCustomer} setIsCustomer={setIsCustomer} isMerchant={isMerchant} setIsMerchant={setIsMerchant} />
      </div>
    </div>
  )
}

export default Home
