import React, { useState } from "react";

import projectStyle from "./projectStyle.module.scss";
import { starIcon } from "./starIcon";
export default function Project({ img , title , defultValue }) {
  const [raiting, setRating] = useState(defultValue);
  const [hoverRaiting, setHoverRaiting] = useState(null);
  return (
    <div className={projectStyle.container}>
      <div>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
      </p>
      <div>
        {[...Array(5)].map((_, index) => {
          const radioValue = index + 1;
          return (
            <label key={index} className={projectStyle.label}>
              <input type="radio" name="raiting" value={radioValue} />
              <span
                className={`${projectStyle.star} ${
                  radioValue <= raiting ? projectStyle.raiting : null
                } ${radioValue <= hoverRaiting ? projectStyle.hover : null}`}
                onMouseEnter={() => setHoverRaiting(radioValue)}
                onMouseLeave={() => setHoverRaiting(null)}
                onClick={() => setRating(radioValue)}
              >
                {starIcon}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
