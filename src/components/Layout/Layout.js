import React, {useState, useEffect} from "react";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
//import Hero from '../UI/Hero.jsx'
import Routes from '../../routes/Routers'

const Layout = () => {
  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  }, [theme])

  return (
    <div>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        {/* <Hero  theme={theme} /> */}
        <div>
          <Routes/>
        </div>
        <Footer />
    </div>
  )
}

export default Layout


