import { useRef } from 'react'
import './task2.css'

export const TaskTwo = () => {
  const boxElementRef: any = useRef()

  const cloneElement = () => {
    if (boxElementRef.current) {
      const boxElement = boxElementRef.current
      const clone = boxElement.cloneNode(true)
      boxElement.parentNode?.appendChild(clone)
    }
  }

  return (
    <div className="task-two">
      <div
        className="box-from-task-two">
      </div>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault()
          cloneElement()
        }}
      >
        Clone element
      </button>
    </div>
  )
}