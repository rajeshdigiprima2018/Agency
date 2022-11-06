import React from 'react';
import "../../styles/aboutUs.css";
import AboutTeam from '../../images/aboutTeam.png';

const AboutUs = () => {
  return (
    <section id="aboutus">
    <div className='container'>
        <div className='aboutus_wrapper'>
            <div className='aboutus_content'>
            <h6 className='subtitle'>Why choose us</h6>
                <h2>About US</h2>
                <h2 className='highlight'>Our Company CEO</h2>
                <p className='description aboutus_content-desc'>Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto. 

                </p>
            </div>
            <div className='image'>
            <div className='aboutus_img'>
                {/* <img src={CEO} alt="" /> */}
                <p className='name aboutus_img-name'>Raman</p>
                <p id='img-name'>CEO</p>
            </div>
            <div className='aboutus_img01'>
                <img src={AboutTeam} alt="" />
            </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default AboutUs;