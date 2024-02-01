import React from "react";
import "./index.css";
import logo from "../src/assets/logo.jpeg";
const menuItems = [
  {
    name: "Reg. Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },
  {
    name: "Swaminarayan Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },
  {
    name: "Jain Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },
  {
    name: "Green Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "180 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Bowl Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "180 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },
  {
    name: "Paneer Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "210 Rs.",
      },
      {
        qty: "500GM",
        price: "120 Rs.",
      },
    ],
  },
  {
    name: "Kilogram Sp. Bhaji",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    category: "bhajipav",
    options: [
      {
        qty: "1KG",
        price: "270 Rs.",
      },
      {
        qty: "500GM",
        price: "150 Rs.",
      },
    ],
  },

  {
    name: "Veg. Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },

  {
    name: "Tawa Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },

  {
    name: "Jain Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },

  {
    name: "Swaminarayan Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "170 Rs.",
      },
      {
        qty: "500GM",
        price: "90 Rs.",
      },
    ],
  },

  {
    name: "Kashmiri Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "180 Rs.",
      },
      {
        qty: "500GM",
        price: "100 Rs.",
      },
    ],
  },

  {
    name: "Kilogram Sp. Pulav",
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg",
    category: "pulav",
    options: [
      {
        qty: "1KG",
        price: "250 Rs.",
      },
      {
        qty: "500GM",
        price: "130 Rs.",
      },
    ],
  },

  {
    name: "500 GM Bhaji + 500 GM Pulav + 6 Pav",
    image:
      "https://florafoods.in/wp-content/uploads/2023/07/COMBO-OFFERS-.png",
    category: "combo",
    price:'180 Rs'
   
  },
  {
    name: "1 KG Bhaji + 1 KG Pulav + 12 Pav",
    image:
      "https://florafoods.in/wp-content/uploads/2023/07/COMBO-OFFERS-.png",
    category: "combo",
    price:'350 Rs'
   
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

          <h3 className="productHeader">Bhaji Pav</h3>

          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === "bhajipav")
              .map((item, index) => (
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
          <hr />
          <h3 className="productHeader">Pulav</h3>

          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === "pulav")
              .map((item, index) => (
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

          <hr />
          <h3 className="productHeader">Combos</h3>

          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === "combo")
              .map((item, index) => (
                <div key={index} className="menu-item">
                  <img src={item.image} alt={item.name} />
                  <h3 >{item.name}</h3>
                  <div className="options">
                      <span >
                        <p className="option">{item.price}</p>
                      </span>
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
