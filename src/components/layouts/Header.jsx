import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <img
                src="src/components/layouts/log.png"
                alt="thapa eCommerce logo"
                className="logo"
                width="80%"
                height="auto"
              />
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="About" className="nav-link">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link">
                  products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Contact" className="nav-link">
                  contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="addToCart.html"
                  className="nav-link add-to-cart-button"
                  id="cartValue"
                >
                  <i className="fa-solid fa-cart-shopping"> 0 </i>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
