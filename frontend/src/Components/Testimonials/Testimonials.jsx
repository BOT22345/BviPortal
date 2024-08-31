import "./Testimonials.css";
import nexticon from "../../../assets/next-icon.png";
import backicon from "../../../assets/back-icon.png";
import user1 from "../../../assets/user1.jpg";
import user2 from "../../../assets/user2.jpg";
import user3 from "../../../assets/user3.jpg";
import user4 from "../../../assets/user4.jpg";
import { useRef } from "react";

function Testimonials() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img src={nexticon} className="nextBtn" onClick={slideForward}></img>
        <img src={backicon} className="backBtn" onClick={slideBackward}></img>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user1}></img>
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  It was originally taken from a Latin text written by a Roman
                  Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                  Cicero, who influenced the Latin language greatly.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user2}></img>
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  It was originally taken from a Latin text written by a Roman
                  Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                  Cicero, who influenced the Latin language greatly.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user3}></img>
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  It was originally taken from a Latin text written by a Roman
                  Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                  Cicero, who influenced the Latin language greatly.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user4}></img>
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  It was originally taken from a Latin text written by a Roman
                  Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                  Cicero, who influenced the Latin language greatly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
