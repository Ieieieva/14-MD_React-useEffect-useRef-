import { useRef } from 'react'
import './task3.css'

export const TaskThree = () => {
  const boxThreeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="task-three">
      <div
        className="box-from-task-three"
        ref={boxThreeRef}>
      </div>
      <button
        className="button task-three-btn"
        onClick={() => {
          if(boxThreeRef.current !== null) {
            boxThreeRef.current.style.position = "absolute";
            boxThreeRef.current.style.right = "0";
            boxThreeRef.current.style.top = "0";
            boxThreeRef.current.innerHTML = "Es esmu stūrī"
          }
        }}
      >
        Ej stūrī!
      </button>
    </div>
  )
}