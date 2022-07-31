import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppProvider';
import { addNewItem } from '../../utils/user';
import Warranty from '../AddItem/Warranty';

// string memory _name,
// string memory _description,
// string memory _imageURI,
// uint32 _baseWarranty,
// uint32 _loyaltyLimit,
// uint32 _loyaltyPoints,
// bool _soulBound

const AddItem = () => {
  const [image, setImage] = useState('')
  const [imageSVG, setImageSVG] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemDescription, setitemDescription] = useState('')
  const [baseWarranty, setBaseWarranty] = useState(12)
  const [loyaltyLimit, setLoyaltyLimit] = useState(4)
  const [loyaltyPoints, setLoyaltyPoints] = useState(2)
  const [timePeriod, setTimePeriod] = useState(24)
  const [soulBound, setSoulBound] = useState(false)

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // @ts-ignore
    setImageSVG(base64);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className='w-full grid grid-cols-5 p-2 text-white'>
      <div className='col-span-2'>
        {/* image upload */}
        <div className='flex flex-col items-center justify-start gap-y-4'>
          <div className='w-96 h-96 object-contain p-8 bg-gray-200 rounded-lg'>
            <img src={image} alt='item' className='w-full h-full object-contain rounded-lg' />
          </div>
          <div className='flex flex-col items-center justify-center gap-y-4 w-96'>
            <label htmlFor="file-upload" className="border-4 border-white cursor-pointer py-3 bg-gradient-primary rounded-lg w-full text-center">
              Upload Image
            </label>
            <input id="file-upload" type='file' className='hidden' onChange={(e) => {
              {/* @ts-ignore */ }
              setImage(URL.createObjectURL(e.target.files[0]))
              uploadImage(e)
            }} />
            <button
              className='border-4 border-white cursor-pointer py-3 bg-gradient-primary rounded-lg w-full text-center'
              onClick={() => {
                addNewItem(itemName, itemDescription, imageSVG, baseWarranty, loyaltyLimit, loyaltyPoints, timePeriod, soulBound)
              }}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
      <div className='col-span-3 card-pop-out mx-8 p-8 rounded-xl text-gray-500'>
        {/* Form with inputs: name, description, basewarranty, loyaltylimit soulbound */}
        <form className='flex flex-col px-16 gap-y-2'>
          <label htmlFor='itemName' className='text-xl'>Item Name</label>
          <input type='text' name='itemName' id='itemName' value={itemName} onChange={(e) => {
            setItemName(e.target.value)
          }} className='rounded-xl p-3 text-gray-600 card-pop-in border-4 outline-indigo-500' />
          <label htmlFor='itemDescription' className='text-xl'>Item Description</label>
          <textarea name='itemDescription' id='itemDescription' value={itemDescription} onChange={(e) => {
            setitemDescription(e.target.value)
          }} className='rounded-xl p-3 text-gray-600 card-pop-in border-4 mb-4 outline-indigo-500' />
          <div className='flex gap-x-4 items-center'>
            <input type="checkbox" className='w-6 h-6 accent-indigo-500' checked={soulBound} onClick={() => setSoulBound(oldState => !oldState)} />
            <label htmlFor="soulbound" className='text-xl'>Soul-Bound</label>
          </div>
          <Warranty baseWarranty={baseWarranty} setBaseWarranty={setBaseWarranty} loyaltyLimit={loyaltyLimit} setLoyaltyLimit={setLoyaltyLimit} loyaltyPoints={loyaltyPoints} setLoyaltyPoints={setLoyaltyPoints} timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        </form>
      </div>
    </div >
  )
}

export default AddItem