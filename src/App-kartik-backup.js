import React from "react";
import "./index.css";
import logo from "../src/assets/logo.png"
const menuItems = [
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pav Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description:
      "A delicious mix of mashed vegetables served with buttered bread rolls.",
    price: "$8.99",
    options: ["Butter", "Cheese"],
  },
  {
    name: "Pulav",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    description: "Fragrant rice cooked with vegetables and aromatic spices.",
    price: "$10.99",
    options: ["Butter", "Cheese"],
  },
  // Add more items similarly
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
          {/* Add more contact info or links as needed */}
        </div>
      </header>
      <div className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
              <div className="options">
                {item.options.map((option, idx) => (
                  <span key={idx} className="option">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>&copy; 2024 The Kilogram</p>
        {/* Add additional footer information or links */}
      </footer>
    </div>
  );
};

export default App;
