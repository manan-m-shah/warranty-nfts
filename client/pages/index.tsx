import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppProvider';

const styles = {
  sideImage: 'w-[100px] h-[100px] card-pop-out p-1 object-cover object-center',
}

const sideImages = ["https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUwN8quXAZ88/v1/800x-1.jpg", "https://pbs.twimg.com/tweet_video_thumb/E-N4OO3WYAkryVz.jpg", "https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=840x630&vertical=top", "https://cdn.dribbble.com/users/1004796/screenshots/3164869/media/1ec7e3163df7f28dddeb9b164b21ed8a.jpg?compress=1&resize=320x240&vertical=top", "https://cdn.dribbble.com/users/1853242/screenshots/15532235/media/282c1a1348743b3b8e6641d4493713e1.png?compress=1&resize=320x240&vertical=top"]

const tabButtons = ["Details", "Warranty", "Loyalty"]

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [activeImage, setActiveImage] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className='grid grid-cols-2 h-full w-full'>
      <div className='flex justify-center mt-16'>
        <div className='px-4'>
          <img src={sideImages[activeImage]} alt='' className='w-[500px] h-[400px] card-pop-out p-1 object-cover object-center' />
          <label htmlFor="image-url" className='flex mt-8 mb-2 px-1'>Image URL</label>
          <div className='flex items-center'>
            <input type='url' className='p-3 border-2 border-r-0 border-gray-100 card-pop-in w-full outline-2 outline-rose-300 caret-rose-500' />
            <button className='button-pop-in px-2 ml-6 text-5xl border-2 border-gray-100'>+</button>
          </div>
        </div>
        <div className='flex flex-col gap-y-4 px-4'>
          {
            sideImages.map((image, i) => {
              return <img src={image} alt='' className={styles.sideImage} onClick={() => { setActiveImage(i) }} />;
            })
          }
        </div>
      </div>
      <div className='flex flex-col items-center mt-16 bg-gray-300 px-8'>
        <div className='card-pop-in flex justify-between items-center w-full p-1'>
          {tabButtons.map((button, i) => {
            return (
              <button
                className={'px-16 text-gray-600 w-full h-full ' + (i===activeButton ? 'text-blue-600 p-3 button-pop-out-2' : '')}
                onClick={()=>setActiveButton(i)}>
                  {button}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
