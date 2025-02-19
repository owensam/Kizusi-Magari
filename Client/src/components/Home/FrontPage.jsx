import { Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="front">
      <img className="back" src="back_n.png" alt="" />
      <div className="front-child1">
        <h1>
          If comparable, It is no longer
          <span className="kizusi"> KIZUSI SMARTEX LTD!</span>
        </h1>
        <button className="order">
          <a href="#booking">Order now</a>{" "}
        </button>
        <button className="view">
          <Link to="/vehicles">View Cars</Link>
        </button>
      </div>
      <div className="front-child2">
        <img className="car car1" src="suv8.png" alt="" />
        <img className="car car2" src="suv5.png" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;
