import { useState } from "react"
import './fourth-form.css'

export const FourthForm = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <form
      className='form fourth-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="counter">
        <button
          className="button"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <p className="count-text">COUNT: {count}</p>
      </div>
      <div className="message">
        <input
          className="input"
          name="input"
          type="text"
          placeholder="write something..."
          value={text}
          onChange={e => setText(e.target.value)}
        ></input>
        {text !== '' &&
          <p>You wrote: {text}.</p>
        }
      </div>
    </form>
  )
}