import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./earning.css";
import { IoCall } from "react-icons/io5";
import Content from "../Content/Content";
import List from "../List/List";

const Earning = () => {
  const location = useLocation();
  const videoId = location.state?.videoId || null;
  //   console.log(videoId);
  const [data, setData] = useState(null);
  const [statisticsData, setstatisticsData] = useState(null);

  const youtubeApiKey = "AIzaSyC1v1e8DVVHj11xdXx0t1AYf7LvovA-wiA";

  const getVideoMetrics = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${youtubeApiKey}`
      );
      const statisticsData = await res.json();
      if (statisticsData.items && statisticsData.items.length > 0) {
        const statistics = statisticsData.items[0].statistics;
        setstatisticsData(statistics);
      } else {
        console.error("No video found with the provided ID.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeApiKey}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const val = data.items[0].snippet;
        setData(val);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getVideoDetails();
    getVideoMetrics();
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <img
            src="https://www.anchors.in/static/media/logo-invite-only.05788d79bfb2d37a65d2.png"
            alt=""
          />
        </div>
        <div className="right">
          <Link to="/call">
            <button className="callBtn">
              <IoCall /> Request a call back
            </button>
          </Link>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzyUSZNa9s1imXjyqUBJddojbcqER8yHGow&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div>
        <Content data={data} statisticsData={statisticsData} />
        <List data={data} statisticsData={statisticsData} />
      </div>
    </div>
  );
};

export default Earning;
