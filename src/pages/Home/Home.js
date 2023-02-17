import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import PropCont from '../../components/Property Container/PropCont'
import Sorter from '../../components/Sorter/Sorter'
import TopCont from '../../components/Top Container/TopCont'
import styles from "./Home.module.css"
import { add } from '../../redux/dataSlice'


const Home = () => {
    const dispatch=useDispatch()
    const[isSorted,setIsSorted]=useState(false)
useEffect(()=>{
    const fetchPropData=async()=>{
        const data=await fetch("https://bloomington.data.socrata.com/resource/9q6j-a8rc.json?$query=SELECT%0A%20%20%60permit_num%60%2C%0A%20%20%60property_address%60%2C%0A%20%20%60property_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60expiredate%60%2C%0A%20%20%60contact_type%60%2C%0A%20%20%60contact_name%60%2C%0A%20%20%60contact_address%60%2C%0A%20%20%60contact_city%60%2C%0A%20%20%60contact_state%60%2C%0A%20%20%60contact_zip%60%2C%0A%20%20%60buildings%60%2C%0A%20%20%60units%60")
        const res=await data.json()
        const newRes=res.filter((prop)=>{return prop?.contact_city?.toLowerCase()!=="bloomington"})
dispatch(add(newRes.slice(0,150)))
    }
fetchPropData()
},[])

  return (
   <>
    <Navbar/>
    <div className={styles.outerCont}>
    <TopCont/>
    <Sorter isSorted={isSorted} setIsSorted={setIsSorted}/>
    <PropCont isSorted={isSorted}/>
    </div>
   </>
  )
}

export default Home