import SecondSection from "./secondSection";

function SeventhSection() {
  return (
    <>
      <div className="seventhSectionContainer">
        <div>
          <img src="assets/netflix.png" alt="" srcset="" />
        </div>
        <div>
          <img src="assets/reddit.png" alt="" srcset="" />
        </div>
        <div>
          <img src="assets/amazon.png" alt="" srcset="" />
        </div>
        <div>
          <img src="assets/discord.png" alt="" srcset="" />
        </div>
        <div>
          <img src="assets/spotify.png" alt="" srcset="" />
        </div>
      </div>
      <div className="seventhSectionContainerMobile">
        <div className="upperImages">
          <div>
            <img
              src="assets/netflix.png"
              alt=""
              srcset=""
              height="50px"
              width="91px"
            />
          </div>
          <div>
            <img
              src="assets/reddit.png"
              alt=""
              srcset=""
              height="23px"
              width="71px"
            />
          </div>
        </div>
        <div className="lowerImages">
          <div>
            <img
              src="assets/amazon.png"
              alt=""
              srcset=""
              height="30px"
              width="96px"
            />
          </div>
          <div>
            <img
              src="assets/discord.png"
              alt=""
              srcset=""
              height="32px"
              width="95px"
            />
          </div>
          <div>
            <img
              src="assets/spotify.png"
              alt=""
              srcset=""
              height="26px"
              width="87px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SeventhSection;
