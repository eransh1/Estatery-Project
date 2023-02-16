import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Sorter.module.css"
import { toast } from 'react-toastify';
import { addSorted } from '../../redux/sortedDataSlice';

const Sorter = () => {

    const dispatch=useDispatch()
    const propData=useSelector((state)=>state.data)
    const [dataa,setDataa]=useState({location:"arlington",moveInDate:"",price:"",propType:""})
    const[uniqLocation,setUniqLocation]=useState([])
    const[uniqPropType,setUniqPropType]=useState([])
    const [loading,setLoading]=useState(false)
    const[isSorted,setIsSorted]=useState(false)


//GET UNIQUE LOCATION
useEffect(()=>{
if(!propData||propData.length===0){return}
let location=[]
let price=[]
let propType=[]
propData.map((prop)=>{
    location.push(prop?.contact_city.toLowerCase())
    price.push(Number(prop?.contact_zip?.slice(0,4)))
    propType.push(prop?.property_type.toLowerCase())
})
const newLocation=location.filter((loc)=>{return loc!=="andechs, germany"})
setUniqLocation([...new Set(newLocation)])
setUniqPropType([...new Set(propType)])
},[propData])


    const handleSortSelct=(e)=>{
const{name,value}=e.target
setDataa((prev)=>{
    return {...prev,[name]:value}
})
    }

const handleSorting=(e)=>{
    e.preventDefault()
    setLoading(true)
 
    let newDataPropWise;
    let newDataDateWise;
    let newDataRatewise;
    let finalData

    newDataPropWise=propData.filter((prop)=>{return prop.contact_city.toLowerCase()===dataa.location})

    if(newDataPropWise.length!==0){
        newDataDateWise=newDataPropWise?.filter((prop)=>{return new Date(prop.expiredate)>=new Date(dataa.moveInDate)})
    }
   
    if(newDataDateWise===undefined||newDataDateWise.length===0){toast.error("No match found for selected Date ");setLoading(false);return}
    if(newDataDateWise.length!==0){
        if(dataa.price==="<500")
        {newDataRatewise= newDataDateWise.filter((prop)=>{return Number(prop?.contact_zip?.slice(0,4))<=500  }) }
        else if(dataa.price==="<2500") {newDataRatewise= newDataDateWise.filter((prop)=>{return Number(prop?.contact_zip?.slice(0,4))<2500  }) }
        else if(dataa.price==="<5000") {newDataRatewise= newDataDateWise.filter((prop)=>{return Number(prop?.contact_zip?.slice(0,4))<=5000  }) }
        else if(dataa.price===">5000") {newDataRatewise= newDataDateWise.filter((prop)=>{return Number(prop?.contact_zip?.slice(0,4))>5000 }) }
    }
    if(newDataRatewise===undefined||newDataRatewise.length===0){toast.error("No match found for selected Rate ");setLoading(false);return}
   
    if(newDataRatewise.length!==0){
        finalData=newDataRatewise.filter((prop)=>{return prop.property_type.toLowerCase()===dataa.propType})
    }
    if(finalData===undefined||finalData.length===0){toast.error("No match found for selected Property Type ");setLoading(false);return}
  
    if(newDataPropWise.length!==0&&
        newDataDateWise.length!==0&&
        newDataRatewise.length!==0&&
        finalData.length!==0){toast.success("Found Some Result");setLoading(false);setDataa({location:"",moveInDate:"",price:"",propType:""});dispatch(addSorted(finalData));  setIsSorted(true)}
        else{setLoading(false)}

}

  return (
    <section className={styles.outerCont}>
    <form className={styles.outerContForm} onSubmit={handleSorting}>
        <div className={styles.optionCont}>
            <p className={styles.optionText}>Location</p>
            <select value={dataa.location} onChange={handleSortSelct} name="location" className={styles.input} required>
            {uniqLocation?.sort().map((loc)=>{
                return <option key={loc} style={{textTransform:"capitalize"}} value={loc}>{loc}</option>
            })}
            
</select>
        </div>
        <div className={styles.optionCont}>
            <p className={styles.optionText}>When to Move-In</p>
            <input onChange={handleSortSelct} name='moveInDate' className={styles.input} type="date" placeholder='Select' value={dataa.moveInDate} required/>
        </div>
        <div className={styles.optionCont}>
            <p className={styles.optionText}>Price</p>
            <select value={dataa.price} onChange={handleSortSelct} name="price" className={styles.input} required>
            <option value="<500">{`<$500`}</option>
            <option value="<2500">{`<$2500`}</option>
            <option value="<5000">{`<$5000`}</option>
            <option value=">5000">{`$>5000`}</option>
</select>
        </div>
        <div className={styles.optionCont}>
            <p className={styles.optionText}>Property Type</p>
            <select value={dataa.propType} onChange={handleSortSelct} name="propType" className={styles.input} required>
            {uniqPropType?.sort().map((propType)=>{
                return <option key={propType} value={propType}>{propType}</option>
            })}
</select>
        </div>
        <button disabled={loading} type='submit' className={styles.searchBtn}>{loading?"Searrching..":"Search"}</button>
        {isSorted?<button onClick={()=>{setIsSorted(false);dispatch(addSorted([]))}} className={styles.searchBtn}>Clear</button>:null}
        </form>
    </section>
  )
}

export default Sorter