import { useEffect, useRef, useState } from "react"
import './first-form.css'


export const FirstForm = () => {
  const [message, setMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
       inputRef.current.focus();
    }
  }, []);

  let array: string[] = []
  const handleSubmit = (event: any) => {
    event.preventDefault();
    array.push(message)
    setMessage('')
    setOutputMessage(
      [...outputMessage, message],
    )
    console.log(array)
  }
  
  return (
    <form
      className="form form-first" 
      onSubmit={handleSubmit}
      >
      <label>
        <input 
          className="input"
          name="input"
          type="text"
          placeholder="write something..."
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="outputMessage">{outputMessage}</p>
      </label>
      <button 
        type="submit"
        className="button"
        // onSubmit={(e) => {
        //   e.preventDefault()
        // }}
        >
          Submit
      </button>
    </form>
  )
}