import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/SignUp.css"

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [role, setRole] = useState("Homeowner");

  return (
    <div className="signup-container">
      <div className="signup-inner-container">
        <div className="signup-wrapper">
          {/* Left Image */}
          <div className="signup-image-section">
            <img
              src="/your-image-path.jpg"
              alt="Worker with drill"
              className="signup-image"
            />
          </div>

          {/* Right Form Section */}
          <div className="signup-form-section">
            <h1 className="signup-title">Tradiy®</h1>
            <p className="signup-subtitle">
              Welcome to Tradiy, your easy solution for finding trusted tradespeople and managing home projects.
            </p>
            
            <div className="signup-role-selection">
              <button
                className={role === "Homeowner" ? "signup-active" : ""}
                onClick={() => setRole("Homeowner")}
              >
                Homeowner
              </button>
              <button
                className={role === "Tradiy Trader" ? "signup-active" : ""}
                onClick={() => setRole("Tradiy Trader")}
              >
                Tradiy Trader
              </button>
            </div>

            <input
              type="email"
              placeholder="tradiy@email.com"
              className="signup-input-field"
            />

            <div className="signup-input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="signup-input-field"
              />
              <button
                type="button"
                className="signup-icon-button"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="signup-input-group">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                className="signup-input-field"
              />
              <button
                type="button"
                className="signup-icon-button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button className="signup-button">
              Sign Up
            </button>

            <p className="signup-login-text">
              Already have an account? <a href="/login" className="signup-login-link">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
