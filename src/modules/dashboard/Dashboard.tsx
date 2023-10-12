import { useDataContext } from "../../context/DataProvider";
import { FoodItems } from "../../AppInterface";
import "./Dashboard.css";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { topRated, allCategories, dishesNearYou } = useDataContext();
  const navigate = useNavigate();

  const NavigateToItem = (item: FoodItems) => {
    navigate("/food-details", { state: item });
  };
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container mb-5">
          <h4 className="my-4 fw-600 d-blue"> Top Rated</h4>
          <div className="row">
            {topRated.map((item: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => NavigateToItem(item)}
              >
                <img
                  src={item.url}
                  height="300px"
                  width="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h4 className="fw-600 black">{item.name}</h4>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue"> allCategories</h4>
          <div className="row">
            {allCategories.map((item: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => NavigateToItem(item)}
              >
                <img
                  src={item.url}
                  height="300px"
                  width="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h4 className="fw-600 black">{item.name}</h4>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue">Dishes Near You</h4>
          <div className="row">
            {dishesNearYou.map((items: FoodItems, idx: number) => (
              <div key={idx} className="col-md-4 pointer">
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
