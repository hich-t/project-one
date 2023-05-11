import TokyoHomePageVideo from "../Assets/Videos/homepage_tokyo.mp4"
import DownArrow from "../Assets/Images/down_arrow.png"
import "../Styles/Tokyo.css"


const HomePageTokyo = () => {
    
    return(

        <div className="homepageTokyo">

            <video className="homepageTokyoBgVideo" autoPlay muted loop >
                <source src={TokyoHomePageVideo} type="video/mp4" />
            </video>

        <div className="homepageTokyoTitle">
        <h1 className="homepageTokyoTitleMain">
        Tokyo
        </h1>
        <h1 className="homepageTokyoTitleBis">
        The Majestic Capital - Neon Lights & Ancient Traditions Meet
        </h1>
        </div> 

        <div className="downArrowDiv">
        <img className="downArrow" src={DownArrow} alt="down arrow" />
        </div>







        </div>
    )   
}

export default HomePageTokyo