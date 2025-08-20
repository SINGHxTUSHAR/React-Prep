import React from "react";
import "./UserCards.css";

function UserCards(props) {
  return (
    <div className="user-container">
      <p id="name">{props.name}</p>
      <img
        src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32.jpg"
        alt="User Avatar"
        width={150} height={150} 
      />
      <p id="description">{props.description}</p>
    </div>
  );
}

export default UserCards;
