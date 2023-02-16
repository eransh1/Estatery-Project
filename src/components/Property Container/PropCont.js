import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./PropCont.module.css"

const PropCont = () => {
  const propData=useSelector((state)=>state.data)
  const sortedData=useSelector((state)=>state.sortedData)
  console.log("sortedData",sortedData)
  return (
    <div>PropCont</div>
  )
}

export default PropCont