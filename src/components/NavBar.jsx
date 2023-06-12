import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="*">
            <img
              src="data:image/png;base64,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"
              alt
              width={100}
              height={100}
            />
          </a>

          <a className="navbar-brand" href="#">
            Italian's Food
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserva">
                  Reservation
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
