import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState<boolean>(true);

  function toggle() {
    setIsShowing((isShowing) => !isShowing);
  }

  return [
    isShowing,
    toggle
  ];
}

export default useModal;
