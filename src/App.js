import React from "react";
import "./index.css";
import logo from "../src/assets/logo.jpeg";
const menuItems = [
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: [
      {
        qty: "1KG",
        price: "100 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  // Add more items similarly
];

const App = () => {
  return (
    <div className="container">
      <header>
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "60px",
          }}
        >
          <h2>The Kilogram</h2>
          <p></p>
          <img src={logo} alt="The Kilogram" />
        </div>
      </header>
      <div className="main">
        <div className="menu">
          <h2>Our Menu</h2>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="options">
                  {item.options.map((option, idx) => (
                    <span key={idx}>
                      <p className="option">{option.qty}</p>
                      <p></p>
                      <p className="option">{option.price}</p>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="contact-info">
          <p>Contact us: 123-456-7890</p>
        </div>
        <p>&copy; 2024 The Kilogram</p>
      </footer>
    </div>
  );
};

export default App;
