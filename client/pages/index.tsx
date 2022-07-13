import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppProvider';

const styles = {
  sideImage: 'w-[100px] h-[100px] card-pop-out p-1 object-cover object-center',
}

const sideImages = ['https://cdna.artstation.com/p/assets/images/images/047/552/600/large/duran-3d-1.jpg?1647880199', 'https://cdna.artstation.com/p/assets/images/images/047/552/640/large/duran-3d-20-03-22.jpg?1647880241', 'https://cdna.artstation.com/p/assets/images/images/047/552/610/large/duran-3d-2.jpg?1647880209', 'https://cdnb.artstation.com/p/assets/images/images/047/552/619/large/duran-3d-3.jpg?1647880218', 'https://cdna.artstation.com/p/assets/images/images/047/552/634/large/duran-3d-4.jpg?1647880229',]

const tabButtons = [
  { text: 'Details', style: 'text-blue-500', selectedStyle: 'text-blue-800 bg-blue-200 -shadow-md' },
  { text: 'Warranty', style: 'text-orange-500', selectedStyle: 'text-orange-800 bg-orange-200 -shadow-md' },
  { text: 'Loyalty', style: 'text-rose-500', selectedStyle: 'text-rose-800 bg-rose-200 -shadow-md' },
]


const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [newImage, setNewImage] = useState('https://media.gq.com/photos/6064d9607e3efcdc77d39b00/master/w_3240,h_2160,c_limit/05-nzxt_rtfkt-4k--.jpg');
  const [productVideo, setProductVideo] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  return (
    <div className='grid grid-cols-2 h-full w-full'>
      <div className='flex justify-center mt-16'>
        <div className='px-4'>
          <img src={newImage ? newImage : sideImages[activeImage]} alt='Enter image url below' className='w-[500px] h-[400px] card-pop-out p-1 object-cover object-center' />
          <label htmlFor='image-url' className='flex mt-8 mb-2 px-1'>Image URL</label>
          <div className='flex items-center'>
            <input type='url' className='p-3 border-2 border-white card-pop-in w-full outline-2 outline-rose-300 caret-rose-500 text-gray-500' value={newImage} onChange={(e) => setNewImage(e.target.value)} />
            <button className='button-pop-out px-2 ml-6 text-5xl border-2 border-white h-full pb-1'>+</button>
          </div>
        </div>
        <div className='flex flex-col gap-y-4 px-4'>
          {
            sideImages.map((image, i) => {
              return <img src={image} alt='' className={styles.sideImage} onClick={() => {
                setNewImage('');
                setActiveImage(i)
              }} />;
            })
          }
        </div>
      </div>
      <div className='max-w-2xl flex flex-col gap-y-8 mt-16 card-pop-out-2 p-8 h-fit '>
        <div className='card-pop-in flex justify-between items-center w-full border-2 border-white'>
          {tabButtons.map((button, i) => {
            return (
              <div className='w-full'>
                <button
                  className={button.style + ' flex justify-center w-full h-full py-3 ' +
                    (i === activeButton ?
                      ('button-pop-out-2 scale-105 ease-in duration-300') :
                      '') + ' ' +
                    (i === activeButton ? (button.selectedStyle) : '')
                  }
                  onClick={() => {
                    setActiveButton(i);
                  }}>
                  {button.text}
                </button>
              </div>
            )
          })}
        </div>
        <div className='items-center w-full'>
          <label htmlFor='item-name' className='flex mb-2 px-1'>Item Name</label>
          <input type='text' className='p-3 border-2 border-white card-pop-in w-full outline-2 outline-rose-300 caret-rose-500 text-gray-500' value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div className='flex items-center w-full'>
          <input type="checkbox" className='mr-4 w-5 h-5 accent-blue-300 drop-shadow-md' />
          <label htmlFor="soulbound">Soulbound</label>
        </div>
        <div className='items-center w-full'>
          <label htmlFor='item-name' className='flex mb-2 px-1'>Item Description</label>
          <textarea className='h-40 p-3 border-2 border-white card-pop-in w-full outline-2 outline-rose-300 caret-rose-500 text-gray-500' value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
        </div>
        <div className=''>
          <button className='button-type-1 text-white py-3 px-12'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Home
