import {useState} from "react"
import ExploreLogo2 from "../Assets/Images/explore_logo_2.png"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tokyo from '../TokyoComponents/Tokyo';


const Navbar = () => {

const [dropDown1, setDropDown1] = useState(false)

const handleMouseEnter1 = () => {
    setDropDown1(true)
}

const handleMouseLeave1 = () => {
    setDropDown1(false)
}

const [dropDown2, setDropDown2] = useState(false)



    return(
        <div className='navbar'>
            <div className="navbarLeftSide">
            <Link to="/">
            <img className="exploreLogo" src={ExploreLogo2} alt="explore japan logo" />
            </Link>
            <div className="navbarItem">
  <p 
    className={`navbarButton${dropDown1 ? " navbarButtonActive" : ""}`}
    onMouseEnter={handleMouseEnter1}
    onMouseLeave={handleMouseLeave1}
  >
    Cities
  </p>

  {dropDown1 && (
    <div className="citiesDropdownMenu"
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
    >
      <p className="citiesDropDownMenu-city">
      <Link to="/tokyo" style={{textDecoration:"none", color:"white"}}> 
      Tokyo
      </Link>
      </p>
      <hr className="citiesDropdownMenu-separator"/>
      <p className="citiesDropDownMenu-city">
        Osaka
      </p>
      <hr className="citiesDropdownMenu-separator"/>
      <p className="citiesDropDownMenu-city">
        Kyoto
      </p>
      <hr className="citiesDropdownMenu-separator"/>
      <p className="citiesDropDownMenu-city">
        Hiroshima
      </p>
    </div>
  )}
</div>


          


<div className="navbarItem">
  <p
    className={`navbarButton${dropDown2 ? " navbarButtonActive" : ""}`}
    onMouseEnter={() => setDropDown2(true)}
    onMouseLeave={() => setDropDown2(false)}
  >
    Your Trip
  </p>

  {dropDown2 && (
    <div
      className="yourTripDropdownMenu"
      onMouseEnter={() => setDropDown2(true)}
      onMouseLeave={() => setDropDown2(false)}
    >
      <p className="yourTripDropdownMenu-titles">
        Best Airlines
      </p>
      <hr className="citiesDropdownMenu-separator"/>
      <p className="yourTripDropdownMenu-titles">
        Get around Japan & Cities
      </p>
      <hr className="citiesDropdownMenu-separator"/>
      <p className="yourTripDropdownMenu-titles">
        Cool stuff to do
      </p>
    </div>
  )}
</div>


            </div>


            <div className="navbarRightSide">

            <p className="navbarButton">
            About Us
            </p>

            <p className="navbarButton">
            Contact Us
            </p>

            </div>

        </div>
    )
}

export default Navbar