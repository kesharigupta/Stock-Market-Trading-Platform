import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-muted text-center ">The Zerodha Universe</h1>
        <p className="text-center fs-5 mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt=""  style={{ width: "45%" }}/>
          <p className="text-muted text-small mt-3">
          Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" alt="" style={{ width: "32%" }}/>
          <p className="text-muted text-small ">
          Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small mt-2">
          Systematic trading platform that allows you to create and backtest strategies without coding
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small mt-2">
          Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "38%" }}
          />
          <p className="text-muted text-small mt-2">
          Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto", marginTop:"10px" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
