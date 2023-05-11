import HomepageVideo from "../Assets/Videos/homepageBgVideo.mp4"
import DownArrow from "../Assets/Images/down_arrow.png"

const Homepage = () => {

    return(
        <div className="homepage">
        
            <video className="homepageBgVideo" autoPlay muted loop >
                <source src={HomepageVideo} type="video/mp4" />
            </video>

        <div className="homepageTitle">
        <h1 className="discoveJapan">
        Discover Japan
        </h1>
        <h1 className="underBrandNewLight">
        Under a brand new light.
        </h1>
        </div> 

        <div className="downArrowDiv">
        <img className="downArrow" src={DownArrow} alt="down arrow" />
        </div>
        </div>
    )
}

export default Homepage