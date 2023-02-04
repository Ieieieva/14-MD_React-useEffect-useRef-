

type CounterButtonProps = {
  onClick: any
}

export const CounterButton = ({onClick}: CounterButtonProps) => {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
    >
      Count: 2
    </button>
  )
}