import React, {useRef, useEffect} from "react"
import "./header.css"
import { NavLink} from "react-router-dom"
import {motion} from 'framer-motion'

const nav_links = [
    {
        path:'/home',
        display:'Home',
    },
    {
        path:'/about',
        display:'About',
    },
    {
        path:'/service',
        display:'Services',
     },
    {
        path:'/projects',
        display:'Projects',
    },
    {
        path:'/blog',
        display:'Blog',
    },
    {
        path: '/contact',
        display: 'Contact'
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
                                    <li><a href="index.html">Home 01</a></li>
                                    <li><a href="index-v2.html">Home 02</a></li>
                                    <li><a href="index-v3.html">Home 03</a></li>
                                    <li><a href="index-v4.html">Home 04</a></li>
                                    <li><a href="index-v5.html">Home 05</a></li>
                                    <li><a href="index-v6.html">Home 06</a></li>
                                    <li><a href="index-v7.html">Home 07</a></li>
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