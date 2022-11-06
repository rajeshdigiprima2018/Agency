import React from 'react';
import "../../styles/services.css";
import TextImage1 from './TextImage1';

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc:  'Lorem ipsum dolor sit amet consectuete adipilscing elit. Explilcabo tenetur a nulla nolie non at fugit. Rem invetore sed quasi.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc:  'Lorem ipsum dolor sit amet consectuete adipilscing elit. Explilcabo tenetur a nulla nolie non at fugit. Rem invetore sed quasi.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc:  'Lorem ipsum dolor sit amet consectuete adipilscing elit. Explilcabo tenetur a nulla nolie non at fugit. Rem invetore sed quasi.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc:  'Lorem ipsum dolor sit amet consectuete adipilscing elit. Explilcabo tenetur a nulla nolie non at fugit. Rem invetore sed quasi.'
    },
]

const Services = () => {
  return (
    <section id="service">
    <TextImage1 title='SERVICES'/>
        <div className='container'>
            <div className='services_top-content'>
                <h6 className='subtitle'>Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2 className='highlight'> our best services</h2>
            </div>

            <div className='service_item-wrapper'>
                {
                    serviceData.map((item, index)=>(
                        <div className='services_item' key={index}>
                    <span className='service_icon'>
                        <i class={item.icon}></i>
                    </span>
                    <h3 className='service_title'>{item.title}</h3>
                    <p className='description'>
                        {item.desc}
                    </p>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default Services;