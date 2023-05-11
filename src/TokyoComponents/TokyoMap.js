import TokyoMapImg from "../Assets/Images/TokyoMap.jpeg"

const TokyoMap = () => {
    return(
        <div className="TokyoMap">

        <div className='tokyoMap-Title'>
        <h1 className='tokyoMap-MainTitle'>Tokyo Districts</h1>
        <p className="tokyoMap-QuickIntro"> Tokyo's districts offer diverse experiences, from bustling shopping hubs like Shibuya and Ginza to historic Asakusa, modern Akihabara, and vibrant Shinjuku nightlife.</p>
        </div>

        <div className="tokyoMap-MainMap">
        
        <img src={TokyoMapImg} alt="Tokyo Districts Map" className="tokyoMap-MainMap-img" /> 
         
        </div>
        </div>
    )
}

export default TokyoMap;