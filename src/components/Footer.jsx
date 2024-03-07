import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first">
        <h3>Ubicación</h3>
        <h4>Av. del Conscripto 311. Lomas de Sotelo, Hipódromo de las Américas</h4>
        <h4>Miguel Hidalgo, 11200 Ciudad de México, CDMX</h4>
        <button className="orange-buttons">CÓMO LLEGAR</button>
        <h5>
          VER MÁS INFO ÚTIL <i className="bi bi-arrow-right-square-fill"></i>
        </h5>
      </div>
      <div className="footer-map">
        <iframe
          title="Google Map"
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6327.52007094371!2d-99.21897509299177!3d19.439783036493296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2023aa297692d%3A0xb49206460355e037!2sAv.%20del%20Conscripto%20311%2C%20Lomas%20de%20Sotelo%2C%20Hip%C3%B3dromo%20de%20las%20Am%C3%A9ricas%2C%20Miguel%20Hidalgo%2C%2011610%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses!2sar!4v1709850742668!5m2!1ses!2sar"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
