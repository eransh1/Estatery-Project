import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import PropCont from '../../components/Property Container/PropCont'
import Sorter from '../../components/Sorter/Sorter'
import TopCont from '../../components/Top Container/TopCont'
import styles from "./Home.module.css"
import { add } from '../../redux/dataSlice'


const Home = () => {
    const dispatch=useDispatch()
useEffect(()=>{
    const fetchPropData=async()=>{
        const data=await fetch("https://bloomington.data.socrata.com/resource/9q6j-a8rc.json?$query=SELECT%0A%20%20%60permit_num%60%2C%0A%20%20%60property_address%60%2C%0A%20%20%60property_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60expiredate%60%2C%0A%20%20%60contact_type%60%2C%0A%20%20%60contact_name%60%2C%0A%20%20%60contact_address%60%2C%0A%20%20%60contact_city%60%2C%0A%20%20%60contact_state%60%2C%0A%20%20%60contact_zip%60%2C%0A%20%20%60buildings%60%2C%0A%20%20%60units%60")
        const res=await data.json()
dispatch(add(res))
    }
fetchPropData()
},[])

  return (
   <>
    <Navbar/>
    <TopCont/>
    <Sorter/>
    <PropCont/>
   </>
  )
}

export default Home