import "./About.css";
import playButton from "../../../assets/playMe.png";
function About() {
  return (
    <>
      <div className="About">
        <div className="aboutLeft">
          <iframe
            className="aboutVideo"
            src="https://www.youtube.com/embed/Dk7Xx5f9IBg"
          ></iframe>
        </div>
        <div className="aboutRight">
          <h3>OUR GOALS</h3>
          <h2>Vision</h2>
          <p>
            To become a Total Quality Institute and contribute effectively
            towards national development in the era of rapidly changing global
            economy and ensure prosperity for the mankind at large
          </p>
          <h2>Mission</h2>
          <p>
            The Institute shall strive hard to train young human beings to
            become dynamic, committed and self-motivated Total Quality
            Professionals to meet the rapidly changing multi-dimensional and
            multi-spherical futuristic challenges of the contemporary world
          </p>
          <h2>Quality Policy</h2>
          <p>
            The Institute shall focus on developing Professionals of very high
            intrinsic value, technically sound, emotionally balanced,
            spiritually high, socially sensitive, having responsibility,
            accountability and self-esteem in partnership with parents,
            corporate, academia and government
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
