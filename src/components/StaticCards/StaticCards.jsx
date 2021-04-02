import React from "react";
import "./StaticCards.css";

const StaticCards = () => {
  return (
    <div className="static-cards__container">
      <div className="card">
        <img
          className="card-image"
          src="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/RnDzysOs81fdvhdQAHYtxjFT.png"
          alt=""
        />
      </div>

      <div className="card">
        <img
          className="card-image"
          src="https://www.digiseller.ru/preview/828142/p1_2990768_39fdc7db.jpg"
          alt=""
        />
      </div>

      <div className="card">
        <img
          className="card-image"
          src="https://image.api.playstation.com/vulcan/img/cfn/1130791_COqLRw6IGlDVHxyV8aqC9_YaF0sCN8IbOlVhzJ6sWm5tlpKTjN8npK2vA_mUJUdyQjP4-U4rEnk7cScmlvoLzXi7.png"
          alt=""
        />
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://media.gq.com/photos/5922ee12210dbc53f888f40b/1:1/w_719,h_719,c_limit/mariokart8deluxe.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default StaticCards;
