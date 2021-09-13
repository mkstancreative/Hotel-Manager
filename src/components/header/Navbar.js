import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes, FaChessKing } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from '../Button';
import "../styles/Navbar.css";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton ();
    }, [])

    window.addEventListener("resize", showButton);
    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <FaChessKing className="navbar-icon" />
                  Hotel Master
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/rooms'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Rooms
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/sign-up' className='btn-link'>
                      <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu} >
                        SIGN UP
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
        </nav>            
    </>
    )
}

export default Navbar;
