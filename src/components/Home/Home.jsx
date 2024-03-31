import React, { useState, useContext } from "react";
import axios from "axios";
import { VideoContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [inputUrl, setInputUrl] = useState("");
  const handleInputChange = (e) => setInputUrl(e.target.value);
  const navigate = useNavigate();

  const videoState = useContext(VideoContext);
  const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const getVideoDetails = async () => {
    try {
      const videoId = extractVideoId(inputUrl);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeApiKey}`
      );
      const data = await response?.data;
      if (data.items && data.items.length > 0) {
        videoState.setSnippet(response?.data?.items[0]?.snippet);
        getVideoMetrics();
        navigate("/earning");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getVideoMetrics = async () => {
    try {
      const videoId = extractVideoId(inputUrl);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${youtubeApiKey}`
      );
      const statisticsData = await response?.data;

      if (statisticsData.items && statisticsData?.items?.length > 0) {
        videoState.setStatistics(response?.data?.items[0]?.statistics);
      } else {
        console.error("No video found with the provided ID.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const extractVideoId = (url) => {
    if (!url) {
      //   errorMessage.innerHTML = "Please enter a URL";
    } else {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get("v") || url;
    }
  };

  return (
    <>
      <div className="main">
        <p>
          Discover your earning <br /> potential
        </p>
        <p>
          Turn your Youtube expertise into lucrative income <br /> through
          resource sharing
        </p>
      </div>
      <div className="serch">
        <input
          type="text"
          placeholder="Enter youtube video link"
          id="videoUrl"
          value={inputUrl}
          onChange={handleInputChange}
        />
        <button className="butt" onClick={getVideoDetails}>
          Go to
        </button>
      </div>
      <div className="stl"></div>
    </>
  );
};

export default Home;
