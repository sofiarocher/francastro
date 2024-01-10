import "../styles/Navbar.css"
import logo from "../assets/logo.png"
import { Fade } from "react-awesome-reveal";
import i18n from "../i18n";

function Navbar() { 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
      <div className='nav_container'>
        <Fade>
        <div className='logo_container'>
          <img className="nav_img" src= {logo} />
          <p className='nav_p'>MediaGrowth</p>
        </div>
        <div>
          <button className='nav_btn' onClick={() => changeLanguage('en')}>
              ESP/ENG
          </button>
        </div>
       </Fade>
      </div>
    
  )
}

export default Navbar