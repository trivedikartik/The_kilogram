import React from "react";
import "./index.css";
import logo from "../src/assets/logo.png";

const pavBhajiItems = [
  {
    name: "Reg. Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: {
      "500gm": "90 rupees",
      "1KG": "170 rupees",
    },
  },
  // Add more Pav Bhaji items
];

const pulavItems = [
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
  },
  // Add more Pulav items
];

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="The Kilogram" />
          <h1>The Kilogram</h1>
        </div>
        <div className="contact-info">
          <p>Contact us: 123-456-7890</p>
          <p>Email: info@thekilogram.com</p>
        </div>
      </header>
      <div className="menu">
        <h2>Our Menu</h2>
        <div className="menu-section">
          <h3>Pav Bhaji</h3>
          <div className="menu-items">
            {pavBhajiItems.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} className="dish-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="price-section">
                    <div className="price-variants">
                      <div className="price-variant">
                        <p>500gm</p>
                        <p>{item.price["500gm"]}</p>
                      </div>
                      <div className="price-variant">
                        <p>1KG</p>
                        <p>{item.price["1KG"]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-section">
          <h3>Pulav</h3>
          <div className="menu-items">
            {pulavItems.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="price-section">
                  <div className="price-variant">
                    <p>500gm</p>
                    <p>{item.price["500gm"]}</p>
                  </div>
                  <div className="price-variant">
                    <p>1KG</p>
                    <p>{item.price["1KG"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 The Kilogram</p>
      </footer>
    </div>
  );
};

export default App;
