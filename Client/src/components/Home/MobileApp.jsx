const MobileApp = () => {
  return (
    <div className="mobile">
      <div className="down-grid-cont">
        <div className="download-cont">
          <h1>Download The Free Kizusi Mobile App</h1>
          <p>for faster, easier booking and exclusive deals.</p>
          <div className="btn-cont">
            <button>
              <i class="fa-brands fa-apple"></i>
              <div>
                <p>download on the</p>
                <p>Apple Store</p>
              </div>
            </button>
            <button>
              <img src="playstore.png" alt="" />
              <div>
                <p>download on the</p>
                <p>Google Play</p>
              </div>
            </button>
          </div>
        </div>
          <img className="mobile-img" src="mobile.png" alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
