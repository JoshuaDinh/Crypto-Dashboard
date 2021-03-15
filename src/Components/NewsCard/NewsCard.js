import React from "react";
import "./newsCard.css";
const NewsCard = () => {
  return (
    <div className="newsCard">
      <img
        className="newsCard-image"
        src="https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"
        alt=""
      />
      <div className="newsCard-info">
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem reiciendis non deserunt atque fugit expedita similique
          voluptates mollitia, id magnam harum odio molestiae ipsum iste
          veritatis, quas omnis consequuntur quisquam.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
