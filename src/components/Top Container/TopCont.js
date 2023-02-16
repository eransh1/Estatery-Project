import React, { useState } from 'react'
import styles from "./TopCont.module.css"
import {AiOutlineCloseCircle} from "react-icons/ai"

const TopCont = () => {
const[isSearchCalled,setIsSearchCalled]=useState(false)
  return (
    <>
        <section className={styles.outerCont}>
            <h1 className={styles.title}>Search Properties to rent</h1>
            <div className={styles.searchCont}>
            {isSearchCalled?null:<button onClick={()=>setIsSearchCalled(true)} className={styles.searchBtn}>Search with Searchbar</button>}
            {isSearchCalled?<div>
            <input className={styles.searchBar} type="text" name='search' placeholder='Search....'/>
<AiOutlineCloseCircle onClick={()=>setIsSearchCalled(false)} className={styles.closeBtn}/>
            </div>:null}
           
            </div>
        </section>
    </>
  )
}

export default TopCont