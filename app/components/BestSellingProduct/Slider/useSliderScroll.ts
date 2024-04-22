import { useCallback, useRef, useState } from 'react'

const useSliderScroll = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [maxScrollLeft, setMaxScrollLeft] = useState(0)
  const startPos = useRef(0)
  const scrollLeft = useRef(0)

  const ref = useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIsDragging(true)
      startPos.current = e.pageX - ref.current!.offsetLeft
      scrollLeft.current = ref.current!.scrollLeft
    },
    []
  )

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isDragging || !ref.current) return
      e.preventDefault()
      const x = e.pageX - ref.current!.offsetLeft
      const distance = x - startPos.current
      let newScrollLeft = scrollLeft.current - distance
      ref.current.scrollLeft = newScrollLeft
    },
    [isDragging]
  )

  const onMouseAway = useCallback(() => {
    setIsDragging(false)
    if (!ref.current) return

    const cardWidth = 375
    const scrollLeft = ref.current.scrollLeft
    let newScrollLeft

    const remainder = scrollLeft % cardWidth
    if (remainder < cardWidth / 2) {
      newScrollLeft = scrollLeft - remainder
    } else newScrollLeft = scrollLeft + cardWidth - remainder

    ref.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })
  }, [])

  const clickScrollLeft = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 375,
        behavior: 'smooth'
      })
    }
  }, [])

  const clickScrollRight = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 375,
        behavior: 'smooth'
      })
    }
  }, [])

  return {
    ref,
    onMouseDown,
    onMouseAway,
    onMouseMove,
    clickScrollLeft,
    clickScrollRight
  }
}

export default useSliderScroll
