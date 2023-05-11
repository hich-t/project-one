import React from 'react';
import "../Styles/Tokyo.css";
import Tokyo1 from "../Assets//Images/tokyo_1.webp"
import Tokyo2 from "../Assets//Images/tokyo_2.jpeg"
import Tokyo3 from "../Assets//Images/tokyo_3.jpeg"


const TokyoIntro = () => {
  return (
    <div className="tokyoIntroPage">
      <div className="tokyoIntroPage-content">

        <div className="tokyoIntroPage-content-left">
        
          <h1 className="tokyoIntroPage-title">Tokyo</h1> 

          <p className="tokyoIntroPage-paragraph">
          Tokyo, Japan's dynamic capital, fuses ancient traditions with cutting-edge technology. This city, where old and new harmoniously coexist, offers memorable experiences. Efficient public transportation makes exploring Tokyo's bustling streets a breeze. <br /><br />

          Diverse neighborhoods provide unique attractions. Visit shopping districts like Shibuya and historic Asakusa. Experience Shinjuku's nightlife, luxury hotels, and the famous Kabukicho district. Asakusa hosts the iconic Senso-ji Temple and lively Nakamise-dori shopping street. Ueno Park features museums, a zoo, and picturesque Shinobazu Pond. Akihabara, the electronic and otaku hub, immerses visitors in anime and manga culture. <br /><br />

          Ginza, the luxury shopping area, attracts fashion and art lovers with high-end boutiques, cafes, and galleries. Meiji Shrine offers tranquility amid a vast forest. Tokyo's culinary scene boasts Michelin-starred restaurants and diverse dining, from sushi to ramen. Lively izakayas serve Japanese cuisine and foster social interaction. <br /><br />

          Tokyo's public transportation system impresses with its train, subway, and bus network. The Tokyo Skytree, the tallest tower globally, offers stunning city views, while Sumida River allows for scenic cruises. <br /><br />

          Tokyo promises adventure, exploration, and excitement. Its rich history, vibrant culture, and stunning cityscape attract travelers worldwide. Experience luxury shopping, cultural immersion, and thrilling nightlife in this incredible city. Embark on a Tokyo journey and create unforgettable memories.
          </p>
          </div>

        <div className="tokyoIntroPage-content-right">

        <img src={Tokyo1} alt="Neons everywhere !" className="tokyoIntroPage-content-right-img" />
        <img src={Tokyo2} alt="Tokyo Skyline with Fuji-San" className="tokyoIntroPage-content-right-img" />
        <img src={Tokyo3} alt="Shibuya's crossing" className="tokyoIntroPage-content-right-img" />

        </div>

      </div>
    </div>
  );
}

export default TokyoIntro;