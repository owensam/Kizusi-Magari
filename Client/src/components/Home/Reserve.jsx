import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context/MyContext";

const Reserve = (props) => {
  const [className, setClassName] = useState("");
  const [price, setPrice] = useState("");
  const { handleCancel, handleReserve } = useContext(MyContext);
  const [category, setCategory] = useState("");
  const [car, setCar] = useState("");
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropoffLoc, setDropoffLoc] = useState("");
  const [dateOfPickup, setDateOfPickup] = useState(null); // Assuming dateOfPickup is a Date object
  const [dateOfDropoff, setDateOfDropoff] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get("https://kizusi-magari-api.vercel.app/server");

      const selectedCarName =
        response.data.vehicles[response.data.vehicles.length - 1].car;

      const cars = response.data.cars[0];

      setCategory(
        response.data.vehicles[response.data.vehicles.length - 1].category
      );
      setPickupLoc(
        response.data.vehicles[response.data.vehicles.length - 1].pickupLoc
      );
      setDropoffLoc(
        response.data.vehicles[response.data.vehicles.length - 1].dropoffLoc
      );
      setDateOfPickup(
        response.data.vehicles[response.data.vehicles.length - 1].dateOfPickup
      );
      setDateOfDropoff(
        response.data.vehicles[response.data.vehicles.length - 1].dateOfDropoff
      );

      const matchedCardKey = Object.keys(cars).find(
        (key) => cars[key] === selectedCarName
      );

      setClassName(matchedCardKey);
      switch (matchedCardKey) {
        case "prod1":
          setPrice("$74,150");
          break;
        case "prod2":
          setPrice("$79,990");
          break;
        case "prod3":
          setPrice("$74,990");
          break;
        case "prod4":
          setPrice("$30,690");
          break;
        case "prod5":
          setPrice("$55,880");
          break;
        case "prod6":
          setPrice("$74,150");
          break;
        case "prod7":
          setPrice("$135,500");
          break;
        case "prod8":
          setPrice("$79,990");
          break;
        case "van1":
          setPrice("$43,200");
          break;
        case "van7":
          setPrice("$46,959");
          break;
        case "van6":
          setPrice("$35,500");
          break;
        case "van4":
          setPrice("$33,200");
          break;
        case "van3":
          setPrice("$55,600");
          break;
        case "van8":
          setPrice("$46,415");
          break;
        case "suv1":
          setPrice("$61,500");
          break;
        case "suv7":
          setPrice("$13,440");
          break;
        case "suv6":
          setPrice("$50,100");
          break;
        case "suv4":
          setPrice("$15,466");
          break;
        case "suv5":
          setPrice("$105,500");
          break;
        case "suv2":
          setPrice("$33,500");
          break;
        case "suv3":
          setPrice("$12,620");
          break;
        case "truck1":
          setPrice("$75,500");
          break;
        case "truck2":
          setPrice("$65,500");
          break;
        case "truck4":
          setPrice("$46,500");
          break;
        case "truck5":
          setPrice("$30,150");
          break;
        case "truck6":
          setPrice("$23,700");
          break;
        case "truck7":
          setPrice("$59,300");
          break;
        case "truck8":
          setPrice("$28,150");
          break;
        default:
          break;
      }
      setCar(selectedCarName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();

    const interval = setInterval(getData, 1000); // Fetch data every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ display: props.context ? "flex" : "none" }}
      className="reserve-cont"
    >
      <div className="reserve">
        <div className="reserve-child1">
          <h1>COMPLETE RESERVATION</h1>
        </div>
        <div className="reserve-child2">
          <div>
            <i class="fa-solid fa-circle-info"></i>
            <p className="upon_msg">
              Upon completing this reservation, you will receive:{" "}
            </p>
          </div>

          <p>
            A confirmation email with detailed information about your selected
            car model and next steps to finalize your purchase.
          </p>
        </div>
        <div className="reserve-child3">
          <div className="res-info-cont">
            <p>Vehicle Information</p>
            <div className="info-div1">
              <img className="category" src="category.png" alt="" />
              <div className="info-div2">
                <p>Vehicle Category</p>
                <h6 className="catagory-p p-info">{category}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info-div2">
                <p>Pick Up Location</p>
                <h6 className="pickL-p p-info">{pickupLoc}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info-div2">
                <p>Drop Off Location</p>{" "}
                <h6 className="dropL-p p-info">{dropoffLoc}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-calendar-days"></i>
              <div className="info-div2">
                <p>Pick Up Date</p>
                <h6 className="pickD-p p-info">{dateOfPickup}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-calendar-days"></i>
              <div className="info-div2">
                <p>Drop Off Date</p>
                <h6 className="dropD-p p-info">{dateOfDropoff}</h6>
              </div>
            </div>
          </div>
          <div className="res-car">
            <div>
              <p>
                <b>CAR:</b> {car}
              </p>
              <p>{price}</p>
            </div>

            <img src={`${className}.png`} alt="" />
          </div>
        </div>
        <div className="reserve-child4">
          <button onClick={handleCancel} className="reserve-btn btn btn-dark">
            Cancel
          </button>
          <button
            onClick={handleReserve}
            className="reserve-btn btn btn-primary"
          >
            <p>Reserve</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
