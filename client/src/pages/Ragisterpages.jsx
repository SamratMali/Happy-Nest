import React from "react";
import "../Style/Registerpage.scss";

const Ragisterpages = () => {
  return (
    <div>
      <div className="register">
        <div className="register_content">
          <form className="register_content_form">
            <input placeholder="First Name" name="firstname" required />
            <input placeholder="Last Name" name="lastname" required />
            <input
              placeholder="Email Name"
              name="email"
              type="email"
              required
            />
            <input
              placeholder="Password"
              name="Password"
              type="password"
              required
            />
            <input
              placeholder="Confirm Password"
              name="Confirm Password"
              type="password"
              required
            />

            <input
              id="image"
              type="file"
              name="profileImage"
              accept="image/*"
              style={{ display: "none" }}
              required
            ></input>

            <label htmlFor="image">
              <img src="/assets/addImage.png" alt="add profile photo " />
              <p>Upload Your Photo</p>
            </label>

            <button type="submit">REGISTER</button>
          </form>
          <a href="/login">Already have an account? Log in here</a>
        </div>
      </div>
    </div>
  );
};

export default Ragisterpages;
