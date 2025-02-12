const Testimonial = () => {
  return (
    <div id="testimonials" className="testimonial">
      <div className="testim-child1">
        <h1>Testimonial</h1>
        <img src="hr.svg" className="hr" alt="" />
        <p>
          Explore testimonials and witness the positive changes our clients have
          experienced with us.
        </p>
      </div>
      <div className="testim-child2">
        <div className="testim-cont">
          <div className="testim-descr-cont">
            <i
              className="fa-solid fa-quote-right"
              style={{ color: "#ffffff" }}
            ></i>

            <p>
              Kizusi exceeded my expectations for online car buying. The website's
              simplicity, detailed info, and secure process made it a great
              experience. I highly recommend Nova for anyone looking for an easy
              and reliable way to purchase a car
            </p>
          </div>
          <div className="photo-cont">
            <div>
              <img src="photo.png" className="photo" alt="" />
            </div>

            <div>
              <p className="name">Simon Kibe</p>
              <p className="profess">Senior Bachelor</p>
              <img src="stars2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="testim-cont">
          <div className="testim-descr-cont">
            <i
              className="fa-solid fa-quote-right"
              style={{ color: "#ffffff" }}
            ></i>
            <p>
              I found my dream car on Kizusi's website, and it was a breeze to
              buy. The website is user-friendly, the car options are diverse,
              and the whole process is transparent and efficient. Kizusi is my
              go-to for hassle-free online car shopping.
            </p>
          </div>
          <div className="photo-cont">
            <div>
              <img className="photo2" src="photo2.png"alt="" />
            </div>

            <div>
              <p className="name">OWEN SAM OTIENO</p>
              <p className="profess">Senior Software Engineer</p>
              <img src="stars.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;