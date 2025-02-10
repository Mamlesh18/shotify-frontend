import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./FrontPage.css";

export default function Frontpage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const message =
    "Revolutionizing content creation – Generate YouTube Shorts & Instagram Reels in under 60 seconds! Just enter a one-line idea, and let AI craft a visually stunning masterpiece.";

  useEffect(() => {
    setText(message); // Set the entire message directly (no typewriting effect)
  }, []);

  return (
    <div className="frontpage-container">
      {/* Header */}
      <header className="frontpage-header">
        <div className="logo">ReelMaker</div>
        <div className="navbar">
          <a href="/about">About Us</a>
    
        </div>
        <motion.button
          onClick={() => navigate("/login")}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="login-btn-1"
        >
          Log In
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="main-title"
        >
          Create Reels at the Speed of Thought{" "}
          <span className="rocket-emoji">🚀</span>
        </motion.h1>
        
        {/* Centered Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="main-description"
        >
          {text}
        </motion.p>
        
        <motion.button
          onClick={() => navigate("/dashboard")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="dashboard-btn"
        >
          Dashboard
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="frontpage-footer">
        © 2025 ReelMaker. AI-Powered Video Creation.
      </footer>
    </div>
  );
}
