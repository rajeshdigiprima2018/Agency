import React from 'react';
import "../../styles/about.css";

import aboutImg from '../../images/about-us.jpg';
import TextImage from './TextImage';
import AboutUs from './AboutUs';

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sdita vel totam. Culpa, facilis iusto.'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sdita vel totam. Culpa, facilis iusto.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Hours support',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sdita vel totam. Culpa, facilis iusto.'
    }
]

const About = () => {
    
  return(
  
  <section id="about">
  <TextImage title='ABOUT US'/>
  <AboutUs/>
    <div className='container'>
        <div className='about_wrapper'>
            <div className='about_content'>
            <h6 className='subtitle'>Why choose us</h6>
                <h2>Specialist in aviding clients on</h2>
                <h2 className='highlight'> financial challenges</h2>
                <p className='description about_content-desc'>Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.
                 Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.</p>

                 <div className='choose_item-wrapper'>
                    {
                        chooseData.map((item,index)=>(
                            <div className='choose_us-item' key={index}>
                    <span className='choose_us-icon'><i class={item.icon}></i></span>
                    <div>
                        <h4 className='choose_us-title'>{item.title}</h4>
                        <p className='description'>{item.desc}</p>
                    </div>
                 </div>
                        ))
                    }
                 </div>
            </div>
            <div className='about_img'>
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
    
  </section>
    
  )
};

export default About;