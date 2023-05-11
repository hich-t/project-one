import youngGuy from '../Assets/Images/young_jap_guy.jpeg'
import kimonoWoman from "../Assets/Images/Woman-in-Kimono.jpg"
import youngGirls from "../Assets/Images/young_jap_girls.webp"


const People = () =>  {

    return(
    <div className="peoplePage">



    <div className="peoplePage-content">

    <div className="peoplePage-content-left">


    <h1 className="peoplePagetitle"> 
    The People
    </h1>

    <p className="peoplePage-content-left-paragraph">
    Delve into the multifaceted world of the Japanese people, a harmonious blend of tradition and modernity. The people of Japan balance the preservation of their rich cultural heritage with unwavering pursuit of progress and innovation, creating a unique society that seamlessly marries the past and the present.<br /><br />
The Japanese are adaptable and flexible, possessing a remarkable ability to shift effortlessly between roles and expectations of various social settings. Food plays a central role in their lives, as they deeply appreciate the artistry and skill in each dish, continually seeking out new flavors and experiences.<br /><br />
Entertainment and relaxation are cherished aspects of Japanese culture, with people finding joy in pursuits such as karaoke, manga, and video games, as well as traditional pastimes like visiting onsen (hot springs) and the meditative practice of the tea ceremony. These activities provide a much-needed reprieve from daily demands.<br /><br />
The work ethic of the Japanese people is exceptional, with an unwavering commitment to discipline, punctuality, and respect for authority. Their dedication to professional lives is balanced by the importance of harmony and cooperation, both in the workplace and society. The Japanese are known for their honesty, a quality deeply ingrained in their culture.<br /><br />
In the Japanese people, you will find a captivating blend of the old and the new. Their passion for food, entertainment, relaxation, and their unwavering commitment to work, discipline, and honesty create a cultural tapestry that is inspiring and enchanting. To appreciate the beauty of Japan, immerse yourself in the lives of the people who call this remarkable nation home.

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