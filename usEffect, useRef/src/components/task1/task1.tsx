import { useRef } from "react"
import './task1.css'

export const TaskOne = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="task-one">
      <div 
        className="box-from-task-one"
        ref={boxRef}>
      </div>
      <button
        className="button"
        onClick={() => {
          if(boxRef.current !== null) {
            boxRef.current.style.backgroundColor = "gold";
          }
        }}
      >
        Change color
      </button>
    </div>
  )
}