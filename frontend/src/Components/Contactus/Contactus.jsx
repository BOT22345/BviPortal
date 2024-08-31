import React from "react";
import "./Contactus.css";
import mail from "../../../assets/mail3.jpg";
import mail2 from "../../../assets/mail.png";
import phone from "../../../assets/phone.png";
import location from "../../../assets/location.png";
import whiteArrow from "../../../assets/white-arrow.png";

function Contactus() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "8792d50b-007c-44ae-bddf-0f94fc578cbb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="contactus">
      <div className="contactCol">
        <h3>
          Reach us out <img src={mail} alt="Mail Icon" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          urna sit amet diam viverra tempus. Fusce volutpat lacus nec sapien
          fringilla consectetur. Quisque aliquet velit non nisi gravida
          vestibulum. In et semper metus. Morbi nec libero eget ex tincidunt
          fringilla nec nec odio. Vivamus malesuada, odio non ultrices molestie,
          , neque sit amet rutrum varius, metus nulla facilisis magna,{" "}
        </p>
        <ul>
          <li>
            <img src={mail2} alt="Mail Icon" /> contact mail
          </li>
          <li>
            <img src={phone} alt="Phone Icon" /> phone number
          </li>
          <li>
            <img src={location} alt="Location Icon" /> address of institution
          </li>
        </ul>
      </div>
      <div className="contactCol">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name :"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn darkBtn">
            Submit now <img src={whiteArrow} alt="Submit Arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contactus;
