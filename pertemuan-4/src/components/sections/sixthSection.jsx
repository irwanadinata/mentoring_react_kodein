function SixthSection() {
  return (
    <div className="sixthSectionContainer">
      <div className="sixthSectionLeft">
        <img src="assets/member.png" alt="" srcset="" className="memberImage" />
      </div>
      <div className="sixthSectionRight">
        <h1 className="sixthSectionRightTitle">3 Million+ customers</h1>
        <p className="sixthSectionRightText">
          Since launching in 2016, over 3,000,000 people have <br />
          used Piggyvest to manage their money better,avoid <br />
          over-spending and be more accountable
        </p>
        <p className="sixthSectionRightTextMobile">
          Since launching in 2016, over 3,000,000 <br />
          people have used Piggyvest to manage <br />
          their money better,avoid over-spending <br />
          and be more accountable
        </p>
        <button className="buttonStartSaving">Start Saving</button>
        <div className="buttonDownloadGroup">
          <button className="buttonGetStarted">Get Started</button>
          <button className="buttonDownload">
            <img src="assets/appleStore.png" alt="" srcset="" />
            <p>Get on Iphone</p>
          </button>
          <button className="buttonDownload">
            <img src="assets/playStore.png" alt="" srcset="" />
            <p>Get on Android</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;