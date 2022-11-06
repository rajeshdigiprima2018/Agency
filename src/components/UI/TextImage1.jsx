import React from 'react'
import {Container} from "reactstrap"
import '../../styles/textImage1.css';

const TextImage1 = ({title}) => {
  return (
    <section className='section'>
        <Container className="text">
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default TextImage1;