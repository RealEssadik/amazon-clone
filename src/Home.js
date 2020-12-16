import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
          alt=""
        />
        <h2 className="home__header">Kitchen</h2>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater"
            price={249.75}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX679_.jpg"
          />
          <Product
            id="49530094"
            title="Kitchen Gizmo Snap N Strain Strainer, Clip On Silicone Colander"
            price={16.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ARQmGsNL._AC_SX522_.jpg"
          />
          <Product
            id="49339594"
            title="Fullstar Vegetable Chopper - Spiralizer Vegetable Slicer - Onion Chopper"
            price={25.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81d9IpjoKLL._AC_SX522_.jpg"
          />
          <Product
            id="49933294"
            title="Kitchen Utensil Set 24 Nylon and Stainless Steel Utensil Set"
            price={23.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71aH-SduRQL._AC_SX522_.jpg"
          />
          <Product
            id="43223294"
            title="Prepdeck Complete Meal Preparation Kit and Storage, Cutting Board"
            price={124.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71f6KWQ0ZRL._AC_SX522_.jpg"
          />
          <Product
            id="08223294"
            title="Kusine Defrost Tray and Thawing Plate | Fast defrosting tray for frozen foods "
            price={28.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71jW0RG4kKL._AC_SX522_.jpg"
          />
          <Product
            id="28023294"
            title="Kitchy Pizza Cutter Wheel - Super Sharp and Easy To Clean Slicer"
            price={13.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51W%2BOG6oSML._AC_SX522_.jpg"
          />
          <Product
            id="18232296"
            title="Meat Thermometer Food Thermometer - Digital Instant Read Kitchen Cooking Thermometer"
            price={12.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6137DWnOoOL._AC_SX522_.jpg"
          />
        </div>

        <h2 className="home__header">Books</h2>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={21.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="12378341"
            title="One Small Step Can Change Your Life: The Kaizen Way"
            price={9.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51gYm33r-XL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id="12561341"
            title="The Lean Six Sigma Pocket Toolbook: A Quick Reference Guide to 100 Tools for Improving Quality and Speed"
            price={17.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51-B7m61PIL._SX312_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321981"
            title="The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer"
            price={19.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Vm0JkM2wL._SX346_BO1,204,203,200_.jpg"
          />
          <Product
            id="67821341"
            title="Lean Thinking: Banish Waste and Create Wealth in Your Corporation"
            price={18.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51bUqi8zu2L._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="12387641"
            title="Managing to Learn: Using the A3 Management Process to Solve Problems, Gain Agreement, Mentor and Lead"
            price={50.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51yYpDo8dIL._SX258_BO1,204,203,200_.jpg"
          />
          <Product
            id="13971341"
            title="Lean Production Simplified: A Plain-Language Guide to the World's Most Powerful Production System"
            price={24.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51XvK6Go7tL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="10986476"
            title="The Toyota Way to Lean Leadership: Achieving and Sustaining Excellence through Leadership Development"
            price={13.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51VUAa94ZwL._SX336_BO1,204,203,200_.jpg"
          />
        </div>
        <h2 className="home__header">Electronics</h2>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Dabric"
            price={95.98}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-ich, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={599.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SY385_.jpg"
          />
          <Product
            id="7254358345"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U"
            price={475.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX679_.jpg"
          />
          <Product
            id="96839732"
            title="Xbox Core Controller - Robot White"
            price={59.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51gNmD2-otL._SX425_.jpg"
          />
          <Product
            id="96839767"
            title="AmazonBasics Gaming Headset - Black And Blue"
            price={29.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71lVo9Y3nnL._SX342_.jpg"
          />
          <Product
            id="96837867"
            title="Redragon K552 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard"
            price={38.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71cngLX2xuL._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
