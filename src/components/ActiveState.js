import React, { useState } from "react";
import starIcon from "../../images/icon-star.svg";

function ActiveState() {
  const [rating, setRating] = useState("");
//   const [isSubmit, setIsSubmit] = useState(false);

  function handelRatingClicked(items) {
    setRating(items);
  }
//   function handelSubmit(){
//     setIsSubmit(true)
//   }
 
  console.log(rating);
  return (
    <div className="container">
      
        <div className="icon-container">
          <img className="star-icon" src={starIcon} alt="star-icon" />
        </div>

        <h1 className="heading"> How did we do?</h1>
        <p className="paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="user-response">
          <ul className="rating_btn_list">
            {[1, 2, 3, 4, 5].map((items, index) => (
              <li>
                <button
                  className="rating_btn"
                  onClick={() => handelRatingClicked(items)}
                  key={index}
                >
                  {items}
                </button>
              </li>
            ))}
          </ul>

          <button className="submit_btn" >
            Submit
          </button>
        </div>
     
    </div>
  );
}

export default ActiveState;
