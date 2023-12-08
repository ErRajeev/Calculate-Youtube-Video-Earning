import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const getVideoDetails = async () => {
    const youtubeApiKey = "AIzaSyC1v1e8DVVHj11xdXx0t1AYf7LvovA-wiA";
    const videoUrlInput = document.getElementById("videoUrl");
    try {
      const videoId = extractVideoId(videoUrlInput.value);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeApiKey}`
      );

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        navigate("/earning", { state: { videoId } });
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
      <div className="nav">
        <img
          src="https://www.anchors.in/static/media/logo-invite-only.05788d79bfb2d37a65d2.png"
          alt=""
        />
      </div>
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
