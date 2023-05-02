import React, { useState } from "react";
import starIcon from "../../images/icon-star.svg";
import thankIcon from "../../images/illustration-thank-you.svg";

function ActiveState() {
  const [rating, setRating] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handelRatingClicked(items) {
    setRating(items);
  }


  return (isSubmit === false ?  
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
              <li key={index}>
                <button
                  className="rating_btn"
                  onClick={() => handelRatingClicked(items)}
              
                >
                  {items}
                </button>
              </li>
            ))}
          </ul>

          <button className="submit_btn" onClick={()=>{ setIsSubmit(true)}} >
            Submit
          </button>
        </div>
     
    </div>
  :   <div className="container container-thanks_state">
  {/*  Thank you state start  */}
  <div>
    <img src={thankIcon} alt="" />
  </div>

  <p className="paragraph select-display">You selected {rating} out of 5</p>

  <h1 className="heading">Thank you!</h1>
  <p className="paragraph">
    We appreciate you taking the time to give a rating. If you ever need
    more support, don't hesitate to get in touch!
  </p>

  {/*  Thank you state end  */}
</div>
  );
}

export default ActiveState;
