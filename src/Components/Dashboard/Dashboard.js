import { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isPromptMinimized, setIsPromptMinimized] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setIsPromptMinimized(true); // Minimize the prompt area
    try {
      const response = await axios.post(
        "http://localhost:5001/v1/shortsgenerator/query",
        { prompt },
        {
          headers: {
            Email: "hey@gmail.com",
          },
          responseType: "blob", // Expect a video file
        }
      );

      // Convert the Blob response into a URL to display in the video element
      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      const videoObjectURL = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectURL);
    } catch (error) {
      console.error("Error generating video:", error);
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!videoUrl) return;
    
    const link = document.createElement("a");
    link.href = videoUrl;
    link.setAttribute("download", "generated_video.mp4");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">ReelMaker</div>
        <div className="navbar">
        <p>Backend is currently on progress</p>
    
        </div>
        <div className="header-right">
          <a href="/payment" className="nav-link">Pricing</a>
          <a href="#profile" className="nav-link">Profile</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Prompt Input Area */}
        <div className={`prompt-container ${isPromptMinimized ? "minimized" : ""}`}>
          <textarea
            className="prompt-input"
            placeholder="Enter your idea here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="generate-btn" onClick={handleGenerate}>
            {loading ? "Generating..." : "Generate Video"}
          </button>
        </div>

        {/* Video Section */}
        <div className="video-section">
          {loading && (
            <div className="loading-overlay">
              <p className="loading-message">Generating your video...</p>
            </div>
          )}
          {videoUrl && (
            <>
              <video className="generated-video" src={videoUrl} controls />
              <button className="download-btn" onClick={handleDownload}>
                Download Video
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
