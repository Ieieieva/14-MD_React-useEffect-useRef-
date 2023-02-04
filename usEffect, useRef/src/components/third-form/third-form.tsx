import { useRef, useState } from "react"
import './third-form.css'

export const ThirdForm = () => {
  const [color, setColor] = useState('...')
  const colorBoxRef = useRef<HTMLDivElement>(null)

  const handlePickedColor = (event: any) => {
    setColor(event.target.value)
  }

  return (
    <form 
      className='form third-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <button
        className="button"
        onClick={() => {
          if(colorBoxRef.current !== null) {
            colorBoxRef.current.style.backgroundColor = `${color}`;
            colorBoxRef.current.style.border = 'none'
          }
        }}
      >
        +
      </button>
      <>
        <label className='dropdown-label'>
          Select color:
          <select 
            className='dropdown'
            name='color'
            value={color}
            onChange={handlePickedColor}>
            <option value="red">RED</option>
            <option value="green">GREEN</option>
            <option value="gray">GRAY</option>
            <option value="blue">BLUE</option>
            <option value="yellow">YELLOW</option>
          </select>
        </label>
        <div
          className='box'
          ref={colorBoxRef}
        >
        </div>
      </>
    </form>
  )
}