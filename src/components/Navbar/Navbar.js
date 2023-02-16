import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const[site,setSite]=useState("")
    useEffect(()=>{
let text=window.location.href.split("/")[3]
setSite(text)

    },[])
  return (
 <>
 <ToastContainer/>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.outerCont}`}>
  <div className="container-fluid">
    <NavLink className={`navbar-brand ${styles.navbarBrand}`} to="/">Estatery</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${site==="rent"?styles.nav_item_active:styles.nav_item}`}>
          <NavLink className="nav-link" aria-current="page" to="/rent">Rent</NavLink>
        </li>
        <li className={`nav-item ${site==="buy"?styles.nav_item_active:styles.nav_item}`}>
          <NavLink className="nav-link" aria-current="page" to="/buy">Buy</NavLink>
        </li>
        <li className={`nav-item ${site==="sell"?styles.nav_item_active:styles.nav_item}`}>
          <NavLink className="nav-link" aria-current="page" to="/sell">Sell</NavLink>
        </li>
      </ul>
     <div className={styles.btnCont}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signupBtn}>SignUp</button>
     </div>
    </div>
  </div>
</nav>
 </>
  )
}

export default Navbar