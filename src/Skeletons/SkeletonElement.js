import React from "react";
import "./SkeletonElement.css";
function SkeletonElement({ type }) {
  const classes = `skeleton `;

  return (
    <div className={classes}>
      <div className="skeleton-shimmer">
        <div className="shimmer"></div>
      </div>
      <div className={type}></div>
      <div className="img"></div>
    </div>
  );
}

export default SkeletonElement;
