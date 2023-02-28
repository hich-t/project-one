import {useState} from "react"

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
            <img className="exploreLogo" src="explore_logo.png" alt="explore japan logo" />
            
            <p className="navbarButton"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            >
            Cities
            </p>
            
            { dropDown1 && 
            <div className="citiesDropdownMenu"
              onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}>
            <p className="citiesDropDownMenu-city">
            Tokyo 
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
            }
            

          


            <p className="navbarButton"  
            onMouseEnter={() => setDropDown2(true)}
            onMouseLeave={() => setDropDown2(false)}
            >
            Your Trip
            </p>

            { dropDown2 && 
            <div className="yourTripDropdownMenu"
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
            }

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