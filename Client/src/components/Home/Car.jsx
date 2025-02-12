import Book from "./Book";
import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Car = (props) => {
  
  return (
    <div
      className="type-car type"
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Jaguar F-TYPE</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod1" src="prod1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>2.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>Ksh7,415,000</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ferrari F430</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod6" src="prod6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>5.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>Ksh141,845</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod3" src="prod3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>$7,499,000</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Hyundai Elite</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod4" src="prod4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>8ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>$30,690</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod5" src="prod5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>6.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>£55,880</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model X</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod2" src="prod2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>$79,990</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod7" src="prod7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>135,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model P90</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod8" src="prod8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>8.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>$79,990</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      <Book />
      <Client />
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Car;
