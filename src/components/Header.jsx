import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-brand">
          <NavLink to="/">
            <img src="./assets/logolw.png" />
          </NavLink>
        </div>
        {menu ? (
          <i className="bi bi-x-lg closeHamb" onClick={() => setMenu(!menu)}></i>
        ) : (
          <i className="bi bi-list hamburguer" onClick={() => setMenu(!menu)}></i>
        )}

        <div className={`nav-hamb ${menu ? "nav-hamb-visible" : ""}`}>
          <NavLink className="nav-mob" to="/" onClick={() => setMenu(false)}>
            <h5 className="nav-link">LA EXPOSICIÓN</h5>
          </NavLink>
          <NavLink className="nav-mob" to="/conf" onClick={() => setMenu(false)}>
            <h5 className="nav-link">CONFERENCIAS</h5>
          </NavLink>
          <NavLink className="nav-mob info" to="/info" onClick={() => setMenu(false)}>
            <i className="bi bi-info-circle-fill"></i>
            <h5 className="nav-link">INFO ÚTIL</h5>
          </NavLink>
          <NavLink className="nav-mob" to="/news" onClick={() => setMenu(false)}>
            <h5 className="nav-link">NOVEDADES</h5>
          </NavLink>
          <NavLink className="nav-mob signin" to="/signin" onClick={() => setMenu(false)}>
            <button>REGÍSTRATE</button>
          </NavLink>
        </div>

        <NavLink className="nav-desk" to="/">
          <h5 className="nav-link">LA EXPOSICIÓN</h5>
        </NavLink>
        <NavLink className="nav-desk" to="/conf">
          <h5 className="nav-link">CONFERENCIAS</h5>
        </NavLink>
        <NavLink className="nav-desk info" to="/info">
          <i className="bi bi-info-circle-fill"></i>
          <h5 className="nav-link">INFO ÚTIL</h5>
        </NavLink>
        <NavLink className="nav-desk" to="/news">
          <h5 className="nav-link">NOVEDADES</h5>
        </NavLink>
        <NavLink className="nav-desk signin" to="/signin">
          <button>REGÍSTRATE</button>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
