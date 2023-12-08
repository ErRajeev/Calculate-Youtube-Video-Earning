import React, { useState, useEffect } from "react";
import "../List/List.css";

const List = (props) => {
  const { data, statisticsData } = props;
  const [dynamicData, setDynamicData] = useState([]);

  useEffect(() => {
    if (data && statisticsData) {
      // Extract relevant information from data and statisticsData
      const newVideoData = {
        title: data.title,
        image: data.thumbnails.default.url,
        views: statisticsData.viewCount,
        likes: statisticsData.likeCount,
        comments: statisticsData.commentCount,
        date: new Date(data.publishedAt).toLocaleDateString(),
        duration: "Estimated Earning", // You may need to calculate this based on your logic
      };

      // Assign a rank to the new video data
      newVideoData.rank = dynamicData.length + 1;

      // Update the state with the new video data
      setDynamicData((prevData) => [...prevData, newVideoData]);
    }
  }, [data, statisticsData]);

  return (
    <div className="list-con">
      <h2>Others video potentials</h2>
      <div className="navigation">
        <li>Rank</li>
        <li>Title</li>
        <li>Thumbail</li>
        <li>Views</li>
        <li>Likes</li>
        <li>Comments</li>
        <li>Uploaded on</li>
        <li>Estimated earning</li>
      </div>
      {dynamicData.map((video) => (
        <div className="data" key={video.rank}>
          <p>{video.rank}</p>
          <p className="textstyl">{video.title}</p>
          <p>
            <img className="imgcls" src={video.image} alt="" />
          </p>
          <p>{video.views}</p>
          <p>{video.likes}</p>
          <p>{video.comments}</p>
          <p>{video.date}</p>
          <p>{Math.min(video.views) + 10 * video.comments + 5 * video.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
