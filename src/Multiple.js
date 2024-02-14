import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { multiply } from './Slices/multipleSlice'

const Multiple = props => {
    const dispatch = useDispatch()
    const value = useSelector(state=>state.multiple.value)

    const clickMe = ()=>{
       return dispatch(multiply(2))
    }
  return (
    <>
    <div>Multiple</div>
    <div >{value}</div>
    <button onClick={clickMe}>clickme</button>
    </>
  )
}

export default Multiple