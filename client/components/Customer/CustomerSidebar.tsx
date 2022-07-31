import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

// merchant sidebar with fields- dashboard, items, warranties

const styles = {
  sideButtons: 'px-8 py-3 w-full text-lg rounded-lg button-pop-out border-2 border-white text-gray-500 hover:shadow-md duration-200 ease-in cursor-pointer',
  selectedButton: 'border-2 border-white px-8 py-3 w-full text-lg rounded-lg bg-gradient-primary text-white cursor-pointer',
}

const CustomerSidebar = () => {
  const router = useRouter()
  return (
    <div className=''>
      <ul className='flex flex-col items-center justify-center px-16 gap-y-8'>
        <li className={router.pathname === '/customer' ? styles.selectedButton : styles.sideButtons}>
          <Link href='/customer'>
            <a>Claim</a>
          </Link>
        </li>
        <li className={router.pathname === '/customer/warranties' ? styles.selectedButton : styles.sideButtons}>
          <Link href='/customer/warranties'>
            <a>Warranties</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CustomerSidebar