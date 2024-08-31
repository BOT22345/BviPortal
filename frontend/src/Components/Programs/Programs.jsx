import "./Programs.css";
import Program1 from "../../../assets/Programs_1.jpg";
import Program2 from "../../../assets/Programs_2.jpg";
import Program3 from "../../../assets/Programs_3.jpg";
import ProgramIcon1 from "../../../assets/program-icon-1.png";
import ProgramIcon2 from "../../../assets/program-icon-2.png";
import ProgramIcon3 from "../../../assets/program-icon-3.png";
function Programs() {
  return (
    <>
      <div className="container">
        <div className="Programs">
          <div className="Program">
            <img src={Program1}></img>
            <div className="caption">
              <img src={ProgramIcon1}></img>
              <p>Quality Education</p>
            </div>
          </div>
          <div className="Program">
            <img src={Program2}></img>
            <div className="caption">
              <img src={ProgramIcon2}></img>
              <p>Premium Labs</p>
            </div>
          </div>
          <div className="Program">
            <img src={Program3}></img>
            <div className="caption">
              <img src={ProgramIcon3}></img>
              <p>Top-tier Placement</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
