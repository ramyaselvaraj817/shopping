import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const goToCart = () => navigate("/Cart");

  return (
    <div>
      <header>
        <div className="header">
          <div onClick={goToHome} className="logo">
            <h4 className="sweet">Sweet Dish</h4>
            <img
              src="/assets/breakfast.png"
              width="45px"
              height="45px"
              style={{ marginLeft: 10 }}
              alt="icon"
            />
          </div>
          <div
            className="d-flex"
            style={{
              width: 300,
              justifyContent: "space-evenly",
              paddingTop: 3,
            }}
          >
            <i onClick={goToCart} className="fa fa-shopping-cart cart-icon"></i>
            <span className="cart-count">{1}</span>
            <h5 className="login">Login</h5>
            <h5 className="register">Sign Up</h5>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
