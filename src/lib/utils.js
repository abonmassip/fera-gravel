import { useEffect } from 'react'

export const cx = (...classNames) => classNames.join(' ');

export const useOutsideAlerter = (ref, action) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [ref, action])
}
