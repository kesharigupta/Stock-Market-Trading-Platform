import React from "react";

function LeftSection({ 
  imageUrl, 
  productName, 
  productDescription, 
  tryDemo, 
  learnMore, 
  googleplay, 
  appStore 
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="text-muted">{productName}</h1>
          <p className="fs-5">{productDescription}</p>
         <div>
         {tryDemo && <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>}
         {learnMore && <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>}
         </div>
         <div className="mt-3">
         {googleplay && (
            <a href={googleplay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
          )}
          {appStore && (
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          )}
         </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
