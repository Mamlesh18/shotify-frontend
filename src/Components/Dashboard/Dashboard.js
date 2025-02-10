import { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/generate-video", { prompt });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error("Error generating video:", error);
    }
    setLoading(false);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/download-video", {
        params: { videoUrl },
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "generated_video.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">ReelMaker</header>
      <main className="dashboard-main">
        <textarea
          className="prompt-input"
          placeholder="Enter your idea here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="generate-btn" onClick={handleGenerate}>
          Generate Video
        </button>
        {loading && <p className="loading-message">Generating your video...</p>}
        {videoUrl && (
          <div className="video-section">
            <video className="generated-video" src={videoUrl} controls />
            <button className="download-btn" onClick={handleDownload}>
              Download Video
            </button>
          </div>
        )}
      </main>
      <footer className="dashboard-footer">© 2025 ReelMaker. AI-Powered Video Creation.</footer>
    </div>
  );
}
