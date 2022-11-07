import React, {useRef, useEffect} from "react"
import "./header.css"
import { NavLink} from "react-router-dom"
import {motion} from 'framer-motion'

const nav_links = [
    {
        path:'/home',
        display:'Home',
        submenu: [{
            "name": "Alberta",
            "abbreviation": "AB"
          },
          {
            "name": "British Columbia",
            "abbreviation": "BC"
          },
          {
            "name": "Manitoba",
            "abbreviation": "MB"
          }]
    },
    {
        path:'/about',
        display:'About',
        submenu: [{
    "name": "New Brunswick",
    "abbreviation": "NB"
  },
  {
    "name": "Newfoundland and Labrador",
    "abbreviation": "NL"
  }]
    },
    {
        path:'/service',
        display:'Services',
        submenu: [ {
    "name": "Nova Scotia",
    "abbreviation": "NS"
  },
  {
    "name": "Northwest Territories",
    "abbreviation": "NT"
  },
  {
    "name": "Nunavut",
    "abbreviation": "NU"
  },]
     },
    {
        path:'/projects',
        display:'Projects',
        submenu: [{
    "name": "Ontario",
    "abbreviation": "ON"
  },
  {
    "name": "Prince Edward Island",
    "abbreviation": "PE"
  },]
    },
    {
        path:'/blog',
        display:'Blog',
        submenu: [{
            "name": "Alberta",
            "abbreviation": "AB"
          },
          {
            "name": "British Columbia",
            "abbreviation": "BC"
          },
          {
            "name": "Manitoba",
            "abbreviation": "MB"
          }]
    },
    {
        path: '/contact',
        display: 'Contact',
        submenu: [ {
    "name": "Quebec",
    "abbreviation": "QC"
  },
  {
    "name": "Saskatchewan",
    "abbreviation": "SK"
  }]
    },
    
];

const Header = ({theme, toggleTheme}) => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header_shrink')
        } else {
            headerRef.current.classList.remove('header_shrink')
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', headerFunc);
        return ()=> window.removeEventListener('scroll', headerFunc);
    }, []);

    // eslint-disable-next-line 
    const handleClick = (e) =>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active');

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                <h2>Digency</h2>    
                </div>

                {/*======= navigation ================== */}
                
                
                <div className="navigation" ref={menuRef} onClick={toggleMenu} >
                    <nav id="mainnav" className="mainnav">
                        <ul className="menu"> 
                        {
                            nav_links.map((item,index)=>(
                            <li className="home">
                                <a href="{item.path}">{item.display}</a>
                                <ul className="submenu">
                                {item.submenu.map((items,index)=>(
                                   <li><a href="index.html"> {items.name}</a></li>
                                 
                                ))}  
                                </ul>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    
                </div>




      


           

                {/* =========== light mode ================ */}
                <div className="light-mode">
                    <span onClick={toggleTheme}>
                    {theme === 'light-theme' ? (
                            <span>
                                <i class="ri-moon-line"></i>Dark
                            </span>
                         ) : (
                            <span>
                                <i class="ri-sun-line"></i> Light
                            </span>
                         ) }
                    </span>
                </div>

                     <span className="mobile_menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                     </span>       

            </div>
        </div>
    </header>
  );
};

export default Header;