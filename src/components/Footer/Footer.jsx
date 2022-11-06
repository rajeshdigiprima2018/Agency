import React from 'react';
import './footer.css';


const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    },
]

const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guides'
    },
]

const quickLinks03 = [
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Jobs'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
    <div className='container'>
        <div className='footer_wrapper'>
            <div className='footer_logo'>
                <h2>Digency</h2>
                <p className='description'>Grow with us</p>

                <p className='small_text description'>Lorem ipsum dolor 
                sit amet consecteture adipiscing elit. Optio labore blandities est vel, dolores sequi. Perspeciatis esse illum dolorun placeat!</p>
            </div>


            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>Solutions</h3>
                <ul className='quick_links'>
                {
                    quickLinks01.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>
            </div>



            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>Support</h3>
                <ul className='quick_links'>
                {
                    quickLinks02.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>
            </div>

            
            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>Company</h3>
                <ul className='quick_links'>
                {
                    quickLinks03.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>
            </div> 
        </div>

        <p className='copyright'>Copyright {year}. All rights reserved. </p>
    </div>

    </footer>
  );
};

export default Footer;