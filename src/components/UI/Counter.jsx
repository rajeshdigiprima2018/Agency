import React from 'react'
import '../../styles/counter.css'
import Team from '../UI/Team.jsx';

const counterData=[
    {
        number: '5k',
        text: 'Clients'
    },
    {
        number: 350,
        text: 'Running Projects'
    },
    {
        number: 900,
        text: 'Projects Completed'
    },
]


const Counter = () => {
  return (
  <section className='counter' id="projects">
    <div className='container'>
        <div className='counter_wrapper'>
        {
            counterData.map((item,index)=>(
            <div className='counter_item' key={index}>
            <h3 className='counter_number'>{item.number}+</h3>
            <h4 className='counter_title'>{item.text}</h4>
            </div>
            ))
        }
            
                
        </div>
    </div>
    <Team/>
  </section>
  );
};
export default Counter;