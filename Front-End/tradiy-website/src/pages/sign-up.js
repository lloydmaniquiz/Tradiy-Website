import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/SignUp.css"
import Drilling from "../images/drilling.jpg";
import TradiyLogo from "../images/tradiy-navy-seal.png";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [role, setRole] = useState("Homeowner");
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    upperLower: false,
    specialChar: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isTouched, setIsTouched] = useState(false); // Track if the user has touched the confirm password field

  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
  
    // Validate password
    const valid = {
      length: password.length >= 8,
      upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };
    console.log(valid); // Log the validity state for debugging
    setPasswordValid(valid);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput); // Update confirmPassword first

    // Check if passwords match after confirmPassword state is updated
    setPasswordMatch(newPassword === confirmPasswordInput);
    setIsTouched(true); // Mark the field as touched when the user types
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
          <div className="signup-wrapper">
            {/* Left Image */}
            <div className="signup-image-section">
              <img
                src={Drilling}
                alt="Worker with drill"
                className="signup-image"
              />
            </div>

            {/* Right Form Section */}
            <div className="signup-form-section">
              <img className="brand-title" src={TradiyLogo} alt="Tradiy Logo"/>
              <p className="signup-subtitle">
                Welcome to Tradiy, your easy solution for finding trusted tradespeople and managing home projects.
              </p>
              
              {/* Role selection header */}
              <p className="signup-role-header">Sign Up as:</p>

              {/* Role selection buttons */}
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

              <div className="signup-input-group">
                <label htmlFor="email-input">Email</label>
                <input
                  type="email"
                  id="email-input"
                  placeholder="tradiy@email.com"
                  className="signup-input-field"
                />
              </div>

              <div className="signup-input-group">
                <label htmlFor="password-input">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password-input"
                  placeholder="Password"
                  className="signup-input-field"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <button
                  type="button"
                  className="signup-icon-button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                </button>
              </div>

              <div className="signup-password-checker">
                <ul>
                  <li className={passwordValid.length ? 'valid' : 'invalid'}>
                    <FaCheckCircle /> Password must be at least 8 characters
                  </li>
                  <li className={passwordValid.upperLower ? 'valid' : 'invalid'}>
                    <FaCheckCircle /> Include both uppercase and lowercase letters
                  </li>
                  <li className={passwordValid.specialChar ? 'valid' : 'invalid'}>
                    <FaCheckCircle /> Contain at least one special character (e.g., !, @, #, $, %)
                  </li>
                </ul>
              </div>

              <div className="signup-input-group">
                <label htmlFor="confirm-password-input">Confirm Password</label>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirm-password-input"
                  placeholder="Confirm Password"
                  className="signup-input-field"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <button
                  type="button"
                  className="signup-icon-button"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                </button>
              </div>

              {/* Only show the match message if both passwords are not empty */}
              {isTouched && newPassword && confirmPassword && (
                <p style={{ color: passwordMatch ? 'green' : 'red', fontWeight: "bold", fontFamily:"Hanken Grotesk" }} className="signup-password-match">
                  {passwordMatch ? 'Passwords match!' : 'Passwords do not match!'}
                </p>
              )}

              <button
                className="signup-button"
                disabled={!Object.values(passwordValid).every(Boolean) || !passwordMatch}
              >
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
