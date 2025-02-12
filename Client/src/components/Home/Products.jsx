import { useState, useContext } from "react";
import Car from "./Car";
import Suv from "./Suv";
import Van from "./Van";
import Truck from "./Track";
import Reserve from "./Reserve";
import { MyContext } from "../../context/MyContext";

const Products = () => {
  const { isButtonClicked } = useContext(MyContext);
  const [clickedItems, setClickedItems] = useState({
    A: false,
    B: false,
    C: false,
  });
  const [clickedTabs, setClickedTabs] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const handleClick = (tab) => {
    setClickedTabs((prevValue) => {
      if (tab === "A") {
        return {
          ...prevValue,
          A: true,
          B: false,
          C: false,
          D: false,
        };
      } else if (tab === "B") {
        return {
          ...prevValue,
          A: false,
          B: true,
          C: false,
          D: false,
        };
      } else if (tab === "C") {
        return {
          ...prevValue,
          A: false,
          B: false,
          C: true,
          D: false,
        };
      } else if (tab === "D") {
        return {
          ...prevValue,
          A: false,
          B: false,
          C: false,
          D: true,
        };
      }
    });
  };

  const clickHandler = (item) => {
    setClickedItems((prevClickedItems) => ({
      ...prevClickedItems,
      [item]: !prevClickedItems[item],
    }));

    // Delay execution for 0.3 seconds
    setTimeout(() => {
      setClickedItems((prevClickedItems) => ({
        ...prevClickedItems,
        [item]: false,
      }));
    }, 300);
  };

  return (
    <div className="products" id="product">
      <img className="back2" src="back_n2.png" alt="" />
      <div className="prod-cont">
        <div className="cars-child1">
          <div className="cars1-topic">
            <h1>FEATURED CARS</h1>
            <img src="hr.svg" alt="" />
            <p>“Nova's Special Picks for Seamless City Driving.”</p>
          </div>
          <div className="cars1-main">
            <div className="cars1-main-child">
              <div className="car-cont1">
                <img className="f1-car" src="f1_car.jpg" alt="" />
              </div>
              <div className="car-cont2">
                <h1>Marcedes-Benz-CL5</h1>
                <hr />
                <div className="car-info-cont">
                  <p>S-Class Grandeur</p>
                  <p>85,000$</p>
                </div>
                <ul>
                  <li>Year: 2023</li>
                  <li>Model: S-Class</li>
                  <li>Mileage: 12,000 miles</li>
                  <li>VIN: MBC123XYZ789456</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("A");
                  }}
                  className={`feature-btn ${clickedItems.A ? "clicked" : ""}`}
                >
                  <a href="#booking">EXPLORE PRODUCT</a>
                </button>
              </div>
            </div>
            <div className="cars2-main-child">
              <div className="car-cont1">
                <img className="f2-car" src="f3_car.jpg" alt="" />
              </div>
              <div className="car-cont2">
                <h1>BMW M4</h1>
                <hr />
                <div className="car-info-cont">
                  <p>Gran Turismo M4</p>
                  <p>54,000$</p>
                </div>
                <ul>
                  <li>Year: 2023</li>
                  <li>Model: Turismo M4</li>
                  <li>Mileage: 9,000 miles</li>
                  <li>VIN: NMT123JKZ767944</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("B");
                  }}
                  className={`feature-btn ${clickedItems.B ? "clicked" : ""}`}
                >
                  <a href="#booking">EXPLORE PRODUCT</a>
                </button>
              </div>
            </div>
            <div className="cars3-main-child">
              <div className="car-cont1">
                <img className="f3-car" src="f2_car.jpg" alt="" />
              </div>
              <div className="car-cont2">
                <h1>Audi A1</h1>
                <hr />
                <div className="car-info-cont">
                  <p>A1 Hatchback</p>
                  <p>25,400$</p>
                </div>
                <ul>
                  <li>Year: 2023</li>
                  <li>Model: A1 Hatchback</li>
                  <li>Mileage: 10,000 miles</li>
                  <li>VIN: HKL623DFG735667</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("C");
                  }}
                  className={`feature-btn ${clickedItems.C ? "clicked" : ""}`}
                >
                  <a href="#booking">EXPLORE PRODUCT</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cars-child2">
          <div className="cars2-topic">
            <h1>PRODUCTS</h1>
            <img src="hr.svg" alt="" />
            <p>
              “Kizusi Cars: Builted for those who demand excellence, performance,
              and a touch of luxury on the road.”
            </p>
          </div>
          <div className="cars2-main">
            <div className="tab-btns-cont">
              <div
                onClick={() => {
                  handleClick("A");
                }}
                className={`tab-btns ${clickedTabs.A ? "tab-clicked" : ""}`}
              >
                <p>Cars</p>
              </div>
              <div
                onClick={() => {
                  handleClick("B");
                }}
                className={`tab-btns ${clickedTabs.B ? "tab-clicked" : ""}`}
              >
                <p>SUV/MUV</p>
              </div>
              <div
                onClick={() => {
                  handleClick("C");
                }}
                className={`tab-btns ${clickedTabs.C ? "tab-clicked" : ""}`}
              >
                <p>Tracks</p>
              </div>
              <div
                onClick={() => {
                  handleClick("D");
                }}
                className={`tab-btns ${clickedTabs.D ? "tab-clicked" : ""}`}
              >
                <p>Vans</p>
              </div>
            </div>
            <Car clickState={clickedTabs.A} />
            <Suv clickState={clickedTabs.B} />
            <Truck clickState={clickedTabs.C} />
            <Van clickState={clickedTabs.D} />
            <Reserve context={isButtonClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
