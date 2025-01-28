import { useState } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import "../styles/SignUp.css"

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
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <button
                type="button"
                className="signup-icon-button"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="reset-password-password-checker">
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
              <input
                type={confirmPasswordVisible ? "text" : "password"}
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
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Only show the match message if both passwords are not empty */}
            {isTouched && newPassword && confirmPassword && (
              <p style={{ color: passwordMatch ? 'green' : 'red' }} className="signup-password-match">
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