import React from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/light-hero-bg.png';


const Hero = ({theme}) => {
  return (
    <section className="hero_section" id="home">
        <div className='container'>
            <div className='hero_wrapper'>
                <div className='hero_content'>
                <div>
                    <h2>Commnities</h2>
                    <h2>PROCUREMENT</h2>
                    <h2 className='highlight'>CONSULTING</h2>
                </div>
                 <p className='description'>Lorem ipsum dolor sit amet
                 consectetur adipiscing elit. Non expedita vel totam. Culpa, facilis iusto.</p>

                 <div className='hero_btns'>
                    <button className='primary_btn'>Get Started Now</button>
                    <button className='secondary_btn'>Discovery More</button>
                 </div>
                 </div>

                
                <div className='hero_img'>
                <img src={ theme==='light-theme' ? heroDarkImg : lightImg} alt="hero-img"/>
                </div>
              </div>
        
        
        </div>
        

         
    </section>
    
  );
};

export default Hero;