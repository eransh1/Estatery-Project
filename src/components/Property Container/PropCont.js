import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./PropCont.module.css"
import {BiBed} from "react-icons/bi"
import {FaShower} from "react-icons/fa"
import {BiArea} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import img1 from "../../images/a-d.jpg"
import img2 from "../../images/e-h.jpg"
import img3 from "../../images/i-l.jpg"
import img4 from "../../images/m-p.jpg"
import img5 from "../../images/q-t.jpg"
import img6 from "../../images/u-x.jpg"
import img7 from "../../images/y-z.jpg"

const PropCont = ({isSorted}) => {
  const propData=useSelector((state)=>state.data)
  const sortedData=useSelector((state)=>state.sortedData)
  const[dataToShow,setDataToShow]=useState([])
  const[likeArray,setLikeArray]=useState([])

  useEffect(()=>{
    if(isSorted===false){setDataToShow(propData)}
    if(isSorted){setDataToShow(sortedData)}
    },[isSorted])

useEffect(()=>{
  console.log("isSorted",isSorted)
  if(propData.length===0){return}
  setDataToShow(propData)
},[propData])

const handleLikeBtnClick=(id)=>{

let newArr
if(likeArray.includes(id)){
newArr=likeArray.filter((idx)=>{return idx!==id})
setLikeArray(newArr)
return
}
setLikeArray((prev)=>{return[...prev,id]})
}


  return (
   <>
    <section className={styles.outerCont}>
    {dataToShow?.map((prop,index)=>{
      return<>
      <div key={index} className={styles.cardOuterCont}>
        <div className={styles.imgCont}>
          <img className={styles.image} src={prop?.contact_city?.toLowerCase().codePointAt(0)<"d".codePointAt(0)?img1:prop?.contact_city?.toLowerCase().codePointAt(0)<"h".codePointAt(0)?img2:prop?.contact_city?.toLowerCase().codePointAt(0)<"l".codePointAt(0)?img3:prop?.contact_city?.toLowerCase().codePointAt(0)<"p".codePointAt(0)?img4:prop?.contact_city?.toLowerCase().codePointAt(0)<"t".codePointAt(0)?img5:prop?.contact_city?.toLowerCase().codePointAt(0)<"x".codePointAt(0)?img6:prop?.contact_city?.toLowerCase().codePointAt(0)<"z".codePointAt(0)?img7:null} alt="propImg" />
          <p className={styles.popularTag}>Popular</p>
        </div>
        <div className={styles.infoCont}>
          <h3 className={styles.price}>${prop?.contact_zip?.slice(0,4)} <span className={styles.priceText}>/month</span></h3>
          <h4 className={styles.locationText}>{prop?.contact_city.toLowerCase()}
          <span onClick={()=>handleLikeBtnClick(index)}>{likeArray.includes(index)?<AiFillHeart className={styles.likedIcon}/>:<AiOutlineHeart className={styles.likeIcon}/>}</span>
          </h4>
          <p className={styles.propAddress}>{prop?.contact_address}</p>
          <div className={styles.generalInfoCont}>
            <p className={styles.generalInfoCont_infoCont}><BiBed className={styles.infoIcon}/><span> {prop?.units} Bed</span></p>
            <p className={styles.generalInfoCont_infoCont}><FaShower className={styles.infoIcon}/><span> {prop?.units<=1?prop?.units:Number(prop.units)-1} Bathroom</span></p>
            <p className={styles.generalInfoCont_infoCont}><BiArea className={styles.infoIcon}/><span>5x7 &#13221;</span></p>
          </div>
        </div>
      </div>
      </>
    })}
      
    </section>
   </>
  )
}

export default PropCont