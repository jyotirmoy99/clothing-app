import React from "react";

import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `${linkUrl}`;
    navigate(path);
  };
  return (
    <div className={`${size} menu-item`} onClick={routeChange}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
