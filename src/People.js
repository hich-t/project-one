import youngGuy from './Assets/Images/young_jap_guy.jpeg'
import kimonoWoman from "./Assets/Images/Woman-in-Kimono.jpg"
import youngGirls from "./Assets/Images/young_jap_girls.webp"


const People = () =>  {

    return(
    <div className="peoplePage">



    <div className="peoplePage-content">

    <div className="peoplePage-content-left">


    <h1 className="peoplePagetitle"> 
    The People
    </h1>

    <p className="peoplePage-content-left-paragraph">
    The Japanese people are known for their exceptional friendliness, respectfulness, and dedication to excellence in all aspects of life. From the moment visitors arrive in Japan, they are struck by the warmth and kindness of the locals. <br/>
    The Japanese are renowned for their deep sense of hospitality, which includes a commitment to customer service that is unrivaled in many parts of the world. Visitors are made to feel welcome and valued, and the locals go out of their way to help and assist in any way they can.<br />
    <br/>
    Another quality that makes the Japanese people so appealing is their love of tradition and their deep respect for their cultural heritage. The Japanese have a strong sense of pride in their culture and traditions, which is evident in their daily lives. Whether it's through traditional tea ceremonies, samurai sword-making classes, or exploring the stunning natural beauty of the countryside, the Japanese are eager to share their culture and traditions with visitors.<br />
    <br/>
    In addition to their admirable qualities, the Japanese are also known for their exceptional work ethic and dedication to achieving excellence in all aspects of life. They have a reputation for being meticulous and detail-oriented, which is evident in the quality of their products and services. Japanese people are renowned for their creativity and innovation, which is reflected in their contributions to fields such as technology, fashion, and the arts.<br />
    <br />
    Overall, the Japanese people are a fascinating group with a unique culture and admirable qualities. Their dedication to hospitality, tradition, and excellence is an inspiration to people all around the world. Anyone who has the opportunity to visit Japan will be struck by the warmth, kindness, and dedication of its people, and will come away with a deep appreciation for this remarkable culture.

    </p>
    </div>
    
    <div className="peoplePage-content-right">
        <img className="peoplePage-content-right-img" src={youngGuy} alt="Japanese delivery man" />
        <img className="peoplePage-content-right-img" src={kimonoWoman} alt="japanese women in traditional attire" />
        <img className="peoplePage-content-right-img" src={youngGirls} alt="group of japanese young women" />
    </div>

    </div>

    </div>
)
}

export default People