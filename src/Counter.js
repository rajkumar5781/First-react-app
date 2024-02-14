import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Slices/counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
//   const [content,setContent] = useContext(null)
  const MyContext = React.createContext();
  const contextValue = useContext(MyContext);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}+{contextValue}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}