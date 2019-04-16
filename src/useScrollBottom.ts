import { useRef, useEffect, useState } from 'react';

const useScrollBottom = () => {

  const [isBottom, setIsBottom] = useState(false)

  const scrollRef = useRef(null) as any

  const onScroll = () => {
    setIsBottom(
      scrollRef.current.scrollTop >= scrollRef.current.scrollHeight - scrollRef.current.clientHeight
    )
  }

  useEffect(() => {
    scrollRef.current.addEventListener('scroll', onScroll)
    return () => {
      scrollRef.current.removeEventListener('scroll', onScroll)
    }
  }, [
      scrollRef
    ])

  return [isBottom, scrollRef]
};

export default useScrollBottom;
