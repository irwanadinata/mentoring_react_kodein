import mainImage from "../../assets/mainImage.png"
import appstore from "../../assets/appleStore.png"
import playstore from "../../assets/playStore.png"

function MainSection() {
  return (
    <div className="mainSection">
      <div className="mainSectionLeft">
        <h1 className="mainSectionTitle">
          The Best Way <br /> To Save & Invest
        </h1>
        <div className="mainSectionText">
          Piggyvest help over 3 million customer achieve their financial <br />{" "}
          goal by helping them save and invest with ease
        </div>
        <button className="buttonCreateAccount">Create Free Account</button>
        <div className="buttonDownloadGroup">
          <button className="buttonDownload">
            <div>
              <img src={appstore} alt="" />
            </div>
            <div className="buttonDownloadText">Get on Iphone</div>
          </button>
          <button className="buttonDownload">
            <div>
              <img src={playstore} alt="" srcSet="" />
            </div>
            <div className="buttonDownloadText">Get on Android</div>
          </button>
        </div>
      </div>
      <div>
        <img
          src={mainImage}
          alt="main image"
          srcSet=""
          className="mainImage"
        />
      </div>
      <div className="mainSectionMobile">
        <h1 className="mainSectionTitle">
          The Best Way <br /> To Save & Invest
        </h1>
        <div className="mainSectionText">
          Piggyvest help over 3 million customer <br />
          achieve their financial goal by helping <br />
          them save and invest with ease
        </div>
        <button className="buttonGetStarted">Get Started</button>
        <div className="buttonDownloadGroup">
          <button className="buttonDownload">
            <div>
              <img src="assets/appleStore.png" alt="" />
            </div>
            <div className="buttonDownloadText">Get on Iphone</div>
          </button>
          <button className="buttonDownload">
            <div>
              <img src="assets/playStore.png" alt="" srcSet="" />
            </div>
            <div className="buttonDownloadText">Get on Android</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
