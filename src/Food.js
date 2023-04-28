import Sushi from "./Assets/Images/sushi.jpeg"
import Ramen from "./Assets/Images/ramen.jpeg"
import Kobebeef from "./Assets/Images/kobebeef.jpeg"


const Food = () => {

  return (

    <div className="foodPage">



        <div className="foodPage-content">


        <div className="foodPage-content-left">

        <h1 className="foodPage-title">The Food</h1>

        <p className="foodPage-content-left-paragraph">
        Embark on a tantalizing journey through the diverse world of Japanese cuisine, a culinary adventure that offers delectable options for every budget and taste. Japan's food landscape is a delightful mix of high-end dining experiences and affordable delights, each dish meticulously crafted with passion and skill, showcasing the nation's rich gastronomic heritage. From exquisite kaiseki feasts to scrumptious convenience store finds, the flavors of Japan are sure to entice and captivate.
        <br/>
        <br/>
        Savor the melt-in-your-mouth sensation of world-renowned Kobe beef, its exceptional marbling and tender texture making it one of the most sought-after and luxurious culinary experiences. Indulge in the art of kaiseki, a multi-course dining journey that highlights the essence of the season through a harmonious balance of taste, texture, and presentation, often reserved for special occasions or fine dining establishments.
        <br/>
        <br/>
        Yet, the heart and soul of Japanese cuisine can also be found in the humblest of places, like steaming bowls of ramen served at tiny noodle shops, where rich, flavorful broth and perfectly cooked noodles come together to create an unforgettable and wallet-friendly meal. Japan's love for ramen transcends regional boundaries, with each area putting its unique spin on this beloved comfort food.
        <br/>
        <br/>
        Convenience stores, or konbini, are a treasure trove of affordable and delicious options, offering everything from mouthwatering onigiri (rice balls) and bento boxes to freshly made sandwiches and delectable sweet treats. These culinary gems can be found on almost every street corner, providing an accessible and satisfying taste of Japan at a fraction of the cost.
        <br/>
        <br/>
        Street food in Japan is another testament to the country's culinary prowess, with an array of tasty and affordable snacks waiting to be discovered. Savor the savory goodness of takoyaki (octopus-filled dough balls) and okonomiyaki (savory pancakes), or indulge your sweet tooth with taiyaki (fish-shaped cakes filled with sweet bean paste) and dorayaki (red bean-filled pancakes).
        <br/>
        <br/>
        Whether you're indulging in a luxurious dining experience or savoring the simple pleasure of a konbini snack, the world of Japanese cuisine offers a multitude of options for every wallet and palate. As you explore the myriad flavors and unforgettable experiences that Japan has to offer, let your taste buds guide you on a gastronomic adventure that you'll cherish for a lifetime.
        </p>
        </div>


        <div className="foodPage-content-right">

        <img src={Sushi} alt="Fresh Sushi" className="foodPage-content-right-img" />
        <img src={Ramen} alt="Succulent Ramen" className="foodPage-content-right-img" />
        <img src={Kobebeef} alt="Kobe Beef, the best in the world" className="foodPage-content-right-img" />

        </div>

        </div>

    </div>



  )
}

export default Food