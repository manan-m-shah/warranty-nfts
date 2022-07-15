import React, { Dispatch, SetStateAction } from 'react'
import { AddItemTabButton } from '../../../types/AddItem';

type Props = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
}

const NextButton = (props: Props) => {
  const { activeButton, setActiveButton } = props;
  return (
    <button
      className={'rounded-lg button-pop-out hover:shadow-sm font-bold border-4 border-white py-3 px-12 ' + activeButton.selectedStyle}
      onClick={() => setActiveButton(oldState => (oldState + 1)%3)}>
      Next
    </button>
  )
}

export default NextButton