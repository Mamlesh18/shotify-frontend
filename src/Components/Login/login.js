import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsEmailEntered(true); // Show password field
  };

  const handleLogin = () => {
    if (!password) {
      alert("Please enter your password.");
      return;
    }
  };

  const handleGoogleAuth = () => {
    // Perform Google authentication logic here
    console.log("Google Auth clicked");
  };

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to signup page
  };

  return (
    <div className="login-container">
      {/* Left Section - Login Details */}
      <div className="login-section">
        <div className="logo">ReelMaker</div>
        <h1 className="welcome-message">Welcome Back!</h1>

        {/* Email Input */}
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          {!isEmailEntered ? (
            <button onClick={handleContinue} className="continue-btn" disabled={!email}>
              Continue
            </button>
          ) : null}
        </div>

        {/* Password Input (Appears after entering email) */}
        {isEmailEntered && (
          <div className="input-group fade-in">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button onClick={handleLogin} className="login-btn" disabled={!password}>
              Log In
            </button>
          </div>
        )}

        {/* OR Divider */}
        <div className="or-divider">
          <span>OR</span>
        </div>

        {/* Google Authentication Button */}
        <button onClick={handleGoogleAuth} className="google-auth-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
               alt="Google Logo" 
               className="google-logo" 
          />
          Continue with Google
        </button>

        {/* Sign Up Option */}
        <p className="signup-option">
          Don't have an account? <span onClick={handleSignUp}>Sign Up</span>
        </p>
      </div>

      {/* Right Section - Product Information */}
      <div className="product-section">
        <h2 className="product-title">Revolutionizing Content Creation</h2>
        <p className="product-description">
          Generate YouTube Shorts & Instagram Reels in under 60 seconds! Just enter a one-line idea, and let AI craft a visually stunning masterpiece.
        </p>
      </div>
    </div>
  );
}