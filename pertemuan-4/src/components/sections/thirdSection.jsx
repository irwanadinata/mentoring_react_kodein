function ThirdSection() {
  return (
    <>
      <div className="thirdSectionContainer">
        <div className="thirdMain">
          <h1 className="thirdMainTitle">
            4 Ways to build <br />
            your savings
          </h1>
          <p className="thirdMainText">
            Earn 5%-15% when you save with any <br />
            of these Piggyvest plans{" "}
          </p>
          <button className="buttonStartSaving">Start Saving</button>
          <button className="buttonStartSavingMobile">Start Saving</button>
        </div>
        <div className="feature">
          <img src="assets/protectBlue.png" alt="" height="41px" width="43px" />
          <h3 className="featureTitle">Automated Savings</h3>
          <p className="featureTextOdd">
            Build a dedicated saving on your <br />
            term automatically or manually
          </p>
          <div className="goFeature">
            <img src="assets/backBlue.png" alt="" />
            <p className="goFeatureText">Piggybank</p>
          </div>
        </div>
        <div className="feature" />
        <img src="assets/secretBlue.png" alt="" height="41px" width="43px" />
        <h3 className="featureTitle">Fixed Savings</h3>
        <p className="featureTextEven">
          Lock money away for a fixed duration <br />
          with no access to it until maturity. it’s <br />
          like having a custom fixed deposit,
        </p>
        <div className="goFeature">
          <img src="assets/backBlue.png" alt="" />
          <p className="goFeatureText">Savelock</p>
        </div>
      </div>
      <div className="feature">
        <img src="assets/protectGreen.png" alt="" height="41px" width="43px" />
        <h3 className="featureTitle">Good oriented-Savings</h3>
        <p className="featureTextOdd">
          Build a dedicated saving on your <br />
          term automatically or manually
        </p>
        <div className="goFeature">
          <img src="assets/backGreen.png" alt="" />
          <p className="goFeatureText">Piggybank</p>
        </div>
      </div>
      <div className="feature">
        <img src="assets/secretRed.png" alt="" height="41px" width="43px" />
        <h3 className="featureTitle">Fixed Savings</h3>
        <p className="featureTextEven">
          Lock money away for a fixed duration <br />
          with no access to it until maturity. it’s <br />
          like having a custom fixed deposit,
        </p>
        <div className="goFeature">
          <img src="assets/backRed.png" alt="" />
          <p className="goFeatureText">Savelock</p>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;