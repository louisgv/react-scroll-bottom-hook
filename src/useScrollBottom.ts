import { useRef, useEffect, useState } from 'react';

const useScrollBottom = () => {

  const [isBottom, setIsBottom] = useState(false)

  const scrollRef = useRef(null) as any

  const onScroll = () => {
    if(scrollRef.current){
      setIsBottom(
        scrollRef.current.scrollTop >= scrollRef.current.scrollHeight - scrollRef.current.clientHeight
      )
    }
  }

  useEffect(() => {
    scrollRef.current.addEventListener('scroll', onScroll)
    return () => {
      if(scrollRef && scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', onScroll)
      }
    }
  }, [
    scrollRef.current
    ])

  return [isBottom, scrollRef]
};

export default useScrollBottom;
