import React from "react";

const Payment = () => {
  return (
    <div className="paymentDiv">
      <h1>Payment Info</h1>
      <div className="paymentForm">
        <div className="paymentCode">
          <label htmlFor="" className="paymentInput">
            Card number
          </label>
          <input type="text" placeholder="#### #### #### ####" />
        </div>
        <div className="paymentCodes">
          <div className="paymentCode">
            <label htmlFor="" className="paymentInput">
              Expiration date
            </label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="paymentCode">
            <label htmlFor="" className="paymentInput">
              Security code
            </label>
            <input type="text" placeholder="###" />
          </div>
        </div>
        <div className="paymentCode">
          <label htmlFor="" className="paymentInput">
            Name on card
          </label>
          <input type="text" placeholder="Peter Piper" />
        </div>
        <div className="paymentSubmit">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
