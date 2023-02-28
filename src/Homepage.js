

const Homepage = () => {

    return(
        <div className="homepage">
        
            <video className="homepageBgVideo" autoPlay muted loop >
                <source src="../homepageBgVideo.mp4" type="video/mp4" />
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
        <img className="downArrow" src="../down_arrow.png" alt="down arrow" />
        </div>
        </div>
    )
}

export default Homepage