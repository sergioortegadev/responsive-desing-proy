import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-blue-cover">
          <div className="hero-date">
            <div className="hero-date-i">
              <i className="bi bi-calendar2-check-fill"></i>
            </div>
            <div className="hero-date-text">
              <h3>10 - 11 ABRIL</h3>
              <p>Centro Citibanamex - Ciudad de México</p>
            </div>
          </div>
          <div className="hero-main">
            <button className="golden-buttons">NUEVO FORMATO</button>
            <h1>El Summit 365</h1>
            <p>
              Congreso Internacional del más alto nivel en logistica y supply chain en México y Centroamérica con{" "}
              <strong> conferencias presenciales y 3 Quarterly Sessions</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
