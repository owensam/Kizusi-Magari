import Products from "./Home/Products";
import Header from "./Header";

const Vehicles = () => {
  return (
    <div className="vehicles">
      <Header />
      <div className="vh-cont">
      <img className="vh_bg1" src="back_n.png" alt="" />
        <div className="vh-topic-cont">
          <h1>Vehicles</h1>
          <p>Explore wide range of vehicles from Kizusi</p>
          <img src="hr.svg" alt="" />
        </div>
        <div className="vh-main-cont">
          <div>
            <div className="vh-car-cont">
              <img src="vh.png" alt="" />
              <img src="vh2.png" alt="" />
              <img src="vh3.png" alt="" />
              <img src="vh4.png" alt="" />
            </div>
            <div className="vh-descrp-cont">
              <h1>Nova vehicles</h1>
              <p>
                Explore Kizusi's Vehicles Page for a curated collection of sleek
                sedans, SUVs, high-performance sports cars, eco-friendly
                electric/hybrid vehicles, family-friendly minivans, compact city
                cars, and powerful trucks. We ensures you find the perfect
                ride for your lifestyle.
              </p>
              <ul>
                <li>
                  <b>Electric Propulsion:</b> Kizusi cars feature advanced
                  electric propulsion for eco-friendly, high-performance
                  driving.
                </li>
                <li>
                  <b>Aerodynamic Design:</b> Our vehicles showcase a
                  fuel-efficient, aerodynamic design for a modern and visually
                  striking aesthetic.
                </li>
                <li>
                  <b>Connectivity Suite:</b> Kizusi's futuristic connectivity
                  suite seamlessly integrates navigation, entertainment, and
                  interaction for an enhanced driving experience.
                </li>
              </ul>
              <a href="#booking">Reserve Your Car</a>
            </div>
          </div>
          <img className="bg-vh-img" src="bg_vh_new.jpg" alt="" />
          <img className="bg-vh-img2" src="bg_vehicle.jpg" alt="" />
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Vehicles;