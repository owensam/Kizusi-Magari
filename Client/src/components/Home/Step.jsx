const Step = () => {
  return (
    <div className="step">
      <div className="step-main-cont1">
        <p>How It Works</p>
        <img src="hr.svg" alt="" />
        <h1>Three Quick and Easy Steps</h1>
      </div>
      <div className="step-main-cont2">
        <div className="step1-cont">
          <img className="select" src="select.svg" alt="" />
          <h6>Select Car</h6>
          <p>
            Explore and pick your dream car from our diverse collection,
            featuring detailed specs and stunning visuals for an informed
            decision.
          </p>
        </div>
        <div className="step2-cont">
          <img className="operat" src="operat.svg" alt="" />
          <h6>Contact Operator</h6>
          <p>
            Connect with our operators effortlessly for quick assistance,
            ensuring a smooth and expert-guided experience throughout your
            car-buying process.
          </p>
        </div>
        <div className="step3-cont">
          <img className="drive" src="drive.svg" alt="" /> <h6>Lets Drive</h6>
          <p>
            Schedule a test drive easily, and immerse yourself in the driving
            experience of your chosen vehicle at your convenience, making your
            car selection a memorable journey.
          </p>
        </div>
      </div>
      <div className="bg">
        <div>
          <h4>
            Save big on your dream car with our hassle-free online platform.
          </h4>
          <p>
            Top Dealerships. Local Inventory. <b>24/7</b> Assistance.
          </p>
        </div>

        <div>
          <img src="discount.svg" alt="" />
          <p>
            Limited-time offer! Book your car by <b>March, 28, 2025</b> and get a
            free upgrade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
