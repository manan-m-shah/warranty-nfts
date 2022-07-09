import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { ActionKind, AppContext } from '../context/AppProvider';

const styles = {
  sideImage: 'w-[85px] h-[85px] card-pop-out-small p-1',
}

const sideImages = ["https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUwN8quXAZ88/v1/800x-1.jpg", "https://pbs.twimg.com/tweet_video_thumb/E-N4OO3WYAkryVz.jpg", "https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=840x630&vertical=top", "https://cdn.dribbble.com/users/1004796/screenshots/3164869/media/1ec7e3163df7f28dddeb9b164b21ed8a.jpg?compress=1&resize=320x240&vertical=top", "https://cdn.dribbble.com/users/1853242/screenshots/15532235/media/282c1a1348743b3b8e6641d4493713e1.png?compress=1&resize=320x240&vertical=top"]

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <div className='grid grid-cols-2 h-full w-full'>
      <div className='flex justify-center mt-16'>
        <div className='px-4'>
          <img src={sideImages[activeImage]} alt='' className='w-[500px] h-[400px] card-pop-out-big p-1' />
        </div>
        <div className='flex flex-col gap-y-4 px-4'>
          {
            sideImages.map((image, i) => {
              return <img src={image} alt='' className={styles.sideImage} onClick={()=>{setActiveImage(i)}}/>;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
