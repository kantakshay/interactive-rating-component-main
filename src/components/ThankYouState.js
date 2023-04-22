import React from "react";
import thankIcon from "../../images/illustration-thank-you.svg";

function ThankYouState() {
  return (
    <div className="container container-thanks_state">
      {/*  Thank you state start  */}
      <div>
        <img src={thankIcon} alt="" />
      </div>

      <p className="paragraph select-display">You selected {} out of 5</p>

      <h1 className="heading">Thank you!</h1>
      <p className="paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>

      {/*  Thank you state end  */}
    </div>
  );
}

export default ThankYouState;
