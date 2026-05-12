import securityImage from "../../assets/security.png"

function SecondSection() {
  return (
    <div className="secondSectionContainer">
      <div>
        <img src={securityImage} alt="" srcset="" />
      </div>
      <div className="secondSectionRight" />
      <h1 className="secondSectionRightTitle">Your Security is our priority</h1>
      <h1 className="secondSectionRightTitleMobile">
        Your Security is  
        our priority
      </h1>
      <p className="secondSectionRightText">
        Piggyvest use the the highest level of security and it is secures by 256
        bits SSL security <br /> ecryption to ensure that your information is
        completely protected from fraud
      </p>
      <p className="secondSectionRightTextMobile">
        Piggyvest use the the highest level of <br />
        security and it is secures by 256 bits <br />
        SSL security ecryption to ensure that <br />
        your information is completely <br />
        protected from fraud{" "}
      </p>
      <div className="secondSectionRightLearn">
        <a href="" className="secondSectionRightLearnText">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default SecondSection;