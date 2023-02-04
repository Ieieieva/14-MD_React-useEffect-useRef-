import { useEffect, useState } from "react"
import './second-form.css'

export const SecondForm = () => {
  const [result, setResult] = useState(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(isDisabled === false)
    }, 5000)
  }, [])

  return (
    <form
      className='form second-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="multilpy">
        <button
          disabled={isDisabled}
          className="button"
          type="button"
          onClick={() => {
            setResult(result * 2)
            setCount(count + 1)
          }}
        >
          Count: {count}
        </button>
        <p className="resultNum">{result}</p>
      </div>
    </form>
  )
}