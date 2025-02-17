import Header from "./Header";
import Footer from "./Footer";
import Step from "./Home/Step";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about-topic-cont">
        <img src="about.png" alt="" />
        <img src="business.png" alt="" />
        <div>
          <h1>About Us</h1>
          <p>
            <b>Welcome to Kizusi Smartex Ltd</b>, where innovation drives our passion for
            redefining the future of mobility. At <b>KIZUSI</b> , we blend{" "}
            <b>cutting-edge technology</b> to excellence to deliver a driving
            experience that transcends expectations.
          </p>
        </div>
      </div>
      <div className="abt-main">
        <img src="about.svg" alt="" />

        <div className="abt-descrp">
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Kizusi Magari redefine the driving experience with advanced electric
            propulsion, ensuring eco-friendly performance. Their sleek,
            aerodynamic design not only enhances fuel efficiency but also
            captivates with a modern aesthetic. The future unfolds with Nova's
            smart connectivity suite, seamlessly weaving navigation,
            entertainment, and interaction. Elevate your drive with Nova, where
            innovation meets style for an unparalleled automotive journey.
          </p>
          <div className="unique-cont">
            <div className="icons-cont">
              <i class="fa-solid fa-car-side"></i>
              <div>
                <h4>20+</h4>
                <p>Car Types</p>
              </div>
            </div>
            <div className="icons-cont">
              <i class="fa-solid fa-warehouse"></i>
              <div>
                <h4>45+</h4>
                <p>Warehouse</p>
              </div>
            </div>
            <div className="icons-cont">
              <img src="repair.svg" alt="" />
              <div>
                <h4>95+</h4>
                <p>Repair Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Step />
      <Footer />
    </div>
  );
};

export default About;
