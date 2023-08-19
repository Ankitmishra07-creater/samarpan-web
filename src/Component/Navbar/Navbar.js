import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import image1 from '../../assets/logo.png'
import Alert from './Alert'
import './navbar.css'

const Navbar = () => {
  let location = useLocation();
  const toogle = useRef(null)
  function handleClick() {
    toogle.current.click()
  }
  useEffect(() => {
  }, [location])

  return (
    <>
      {/* <Alert /> */}
      <section id="title">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={image1} alt="" />
          </Link>
          {/* <span> */}
            {/* donate button */}
            {
              (location.pathname) !== '/donate' &&
              <Link to='/donate' style={{ textDecoration: "none" }}><button className='a-c'>DONATE</button></Link>
            }

            {/* TOOGLER */}
            <button id='hambarger' ref={toogle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#samarpanTitle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="samarpanTitle">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/' onClick={handleClick}>HOM</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/about' onClick={handleClick}>ABOUT US </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to='/galery' onClick={handleClick}>GALLERY </Link>
              </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to='/team' onClick={handleClick}>TEAM </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/alumni' onClick={handleClick}>ALUMNI</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/contact-us' onClick={handleClick}>CONTACT US </Link>
                </li>
              </ul>
            </div>
          {/* </span> */}


          {(location.pathname) !== '/donate' &&
            <Link to='/donate' style={{ textDecoration: "none" }}><button className='b-c'>DONATE</button></Link>}
        </nav>
      </section>
    </>
  )
}

export default Navbar
