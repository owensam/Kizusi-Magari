import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../../context/MyContext";

const Book = () => {
  const [cars, setCars] = useState([]);
  const {
    isButtonClicked,
    handleButtonClick,
    loading,
    handleLoading,
    isReserveClicked,
  } = useContext(MyContext);

  const [formData, setFormData] = useState({
    category: "",
    car: "",
    pickupLoc: "",
    dropoffLoc: "",
    dateOfPickup: "",
    dateOfDropoff: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isButtonClicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isButtonClicked]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setFormData({
      ...formData,
      category: selectedCategory,
    });
    switch (selectedCategory) {
      case "Car":
        setCars([
          "Jaguar FTYPE",
          "Ferrari F430",
          "Tesla Model S",
          "Hyundai Elite",
          "Tesla Model S75",
          "Tesla Model X",
          "Tesla Model P90",
        ]);
        break;
      case "SUV/MUV":
        setCars([
          "Mahindra Scorpio",
          "Jeep Wrangler",
          "Mercedes-Benz",
          "Mahindra Thar",
          "Honda Elevate",
          "Tata Harrier",
          "Maruti Suzuki Grand",
        ]);
        break;
      case "Track":
        setCars([
          "Toyota Tacoma",
          "Ford Maverick XLT",
          "RAM 1500 Rebel",
          "Ford F-150 XLT",
          "Nissan Frontier SV",
          "Toyota Tundra Hybrid",
          "Hyundai Santa Cruz",
        ]);
        break;
      case "Van":
        setCars([
          "Mercedes-Benz",
          "Toyota Sienna",
          "Honda Odyssey",
          "Kia Carnival",
          "Chrysler Pacifica",
          "Ford Transit",
        ]);
        break;
      default:
        setCars([]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kizusi-magari-api.vercel.app/server", formData);
      console.log(`Your data has been submitted successfully!`, formData);
    } catch (err) {
      console.log("the error is" + err);
    }
  };

  return (
    <div className="book" id="booking">
      <div className="book-topic-cont">
        <h1>Book a car</h1>
      </div>
      <div className="confirm" style={{ display: isReserveClicked ? "" : "none" }}>
      <img src="check.png" alt="" />
        <p>Check your email to confirm an order.</p>
      </div>
      <form className="book-form" action="../Server/server" method="post" onSubmit={handleSubmit}>
        <div className="select-cont1">
          <div className="topic">
            <img src="category.png" alt="" />
            <p>
              Select Vehicle Category<b>*</b>
            </p>
          </div>
          <select
            required
            name="category"
            value={formData.category}
            className="box"
            onChange={handleCategoryChange}
          >
            <option>Select Vehicle Category</option>
            <option value="Car">Car</option>
            <option value="SUV/MUV">SUV/MUV</option>
            <option value="Track">Track</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <div className="select-cont2">
          <div className="topic">
            <i className="fa-solid fa-car-side"></i>
            <p>
              Select Your Car<b>*</b>
            </p>
            <h6 className={cars.length === 0 ? "message" : "msg"}>
              Select vehicle category first!
            </h6>
          </div>
          <select
            required
            name="car"
            value={formData.car}
            onChange={handleInputChange}
            className="box"
          >
            <option>Select Your Car</option>
            {cars.map((car, index) => {
              return (
                <option value={car} key={index}>
                  {car}
                </option>
              );
            })}
          </select>
        </div>
        <div className="select-cont3">
          <div className="topic">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Pick-up<b>*</b>
            </p>
          </div>
          <select
            name="pickupLoc"
            required
            value={formData.pickupLoc}
            onChange={handleInputChange}
            className="box"
          >
            <option>Select pick up location</option>
            <option value="Mombasa, City">
              Mombasa, Kenya
            </option>
            <option value="Kisumu, City">Kisumu, Dala</option>
            <option value="Eldoret, Town">Eldoret, City</option>
            <option value="Thika, Town">Thika, Town</option>
            <option value="Nairobi, City">Nairobi, City</option>
          </select>
        </div>

        <div className="select-cont4">
          <div className="topic">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Drop-of<b>*</b>
            </p>
          </div>
          <select
            required
            name="dropoffLoc"
            value={formData.dropoffLoc}
            onChange={handleInputChange}
            className="box"
          >
            <option>Select drop off location</option>
            <option value="Westlands, Nairobi">
              Nairobi City, Kenya
            </option>
            <option value="Mombasa, City">Mombasa, City</option>
            <option value="Kisumu City">Kisumu, City</option>
            <option value="Thika, Town">Thika, Town</option>
            <option value="Chicago, Illinois">Chicago, Illinois</option>
          </select>
        </div>
        <div className="select-cont5">
          <div className="topic">
            <i className="fa-solid fa-calendar-days"></i>
            <p>
              Pick-up<b>*</b>
            </p>
          </div>
          <input
            type="date"
            name="dateOfPickup"
            value={formData.dateOfPickup}
            onChange={handleInputChange}
            className="date box"
          />
        </div>
        <div className="select-cont6">
          <div className="topic">
            <i className="fa-solid fa-calendar-days"></i>
            <p>
              Drop-of<b>*</b>
            </p>
          </div>
          <input
            type="date"
            name="dateOfDropoff"
            value={formData.dateOfDropoff}
            onChange={handleInputChange}
            className="date box"
          />
        </div>
        <button
          onClick={() => {
            handleButtonClick();
            handleLoading();
          }}
          type="submit"
          className="search"
        >
          <p>Search</p>
        </button>
      </form>
      <div
        className="loader-cont"
        style={{ display: loading ? "flex" : "none" }}
      >
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Book;
