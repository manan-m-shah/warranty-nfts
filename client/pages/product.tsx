import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Details from '../components/AddItem/DetailsProduct';
import Loyalty from '../components/AddItem/LoyaltiesProduct';
import Warranty from '../components/AddItem/WarrantyProduct';
import { AppContext } from '../context/AppProvider';
import { AddItemTabButton } from '../types/AddItem';

const styles = {
    sideImage: 'w-[100px] h-[100px] card-pop-out p-1 object-cover object-center',
}

const sideImages = ['https://cdna.artstation.com/p/assets/images/images/047/552/600/large/duran-3d-1.jpg?1647880199', 'https://cdna.artstation.com/p/assets/images/images/047/552/640/large/duran-3d-20-03-22.jpg?1647880241', 'https://cdna.artstation.com/p/assets/images/images/047/552/610/large/duran-3d-2.jpg?1647880209', 'https://cdnb.artstation.com/p/assets/images/images/047/552/619/large/duran-3d-3.jpg?1647880218', 'https://cdna.artstation.com/p/assets/images/images/047/552/634/large/duran-3d-4.jpg?1647880229',]

const tabButtons: AddItemTabButton[] = [
    { text: 'Details', style: 'text-blue-500', selectedStyle: 'font-semibold text-blue-700 bg-blue-200 -shadow-md ease-in duration-300', selectedAltStyle: 'outline-blue-300 caret-blue-500  accent-blue-300 text-blue-400' },

    { text: 'Warranty', style: 'text-orange-500', selectedStyle: 'font-semibold text-orange-700 bg-orange-200 -shadow-md ease-in duration-300', selectedAltStyle: 'outline-orange-300 caret-orange-500  accent-orange-300 text-orange-400' },

    { text: 'Loyalties', style: 'text-rose-500', selectedStyle: 'font-semibold text-rose-700 bg-rose-200 -shadow-md ease-in duration-300', selectedAltStyle: 'outline-rose-300 caret-rose-500 accent-rose-300 text-rose-400' },
]

// * image url
// https://media.gq.com/photos/6064d9607e3efcdc77d39b00/master/w_3240,h_2160,c_limit/05-nzxt_rtfkt-4k--.jpg


const Product: NextPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [newImage, setNewImage] = useState('');
    const [productVideo, setProductVideo] = useState('');
    const [activeImage, setActiveImage] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [warrantyMonths, setWarrantyMonths] = useState(12);
    const [loyaltyMonths, setLoyaltyMonths] = useState(4);
    const [loyaltyPoints, setLoyaltyPoints] = useState(2);

    return (
        <div className='flex h-full max-h-[80%] w-full'>
            <div className='flex justify-center mt-16 w-7/12'>
                <div className='px-4'>
                    <img src={newImage ? newImage : sideImages[activeImage]} alt='Enter image url below' className='w-[600px] h-[400px] card-pop-out p-1 object-cover object-center' />
                </div>
                <div className='flex flex-col gap-y-4 px-4'>
                    {
                        sideImages.map((image, i) => {
                            return <img src={image} alt='' key={i} className={styles.sideImage} onClick={() => {
                                setNewImage('');
                                setActiveImage(i)
                            }} />;
                        })
                    }
                </div>
            </div>
            <div className='max-w-2xl flex flex-col justify-between mt-16 card-pop-out-2 p-8 mx-8 h-full w-5/12'>
                <div className='card-pop-in flex justify-between items-center w-full border-2 border-white'>
                    {tabButtons.map((button, i) => {
                        return (
                            <div className='w-full' key={i}>
                                <button
                                    className={' flex justify-center w-full h-full py-3 ' +
                                        (i === activeButton ?
                                            ('button-pop-out-2 scale-105 ease-in duration-300') :
                                            button.style) + ' ' +
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
                {
                    activeButton === 0 && <Details activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} itemName={itemName} setItemName={setItemName} itemDescription={itemDescription} setItemDescription={setItemDescription} />
                }
                {
                    activeButton === 1 && <Warranty activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} warrantyMonths={warrantyMonths} setWarrantyMonths={setWarrantyMonths} loyaltyMonths={loyaltyMonths} setLoyaltyMonths={setLoyaltyMonths} loyaltyPoints={loyaltyPoints} setLoyaltyPoints={setLoyaltyPoints} />
                }
                {
                    activeButton === 2 && <Loyalty activeButton={tabButtons[activeButton]} setActiveButton={setActiveButton} />
                }
            </div>
        </div>
    )
}

export default Product
