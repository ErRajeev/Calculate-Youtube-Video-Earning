import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import "./container.css";

const Content = ({ snippet, statistics }) => {
  if (!snippet) {
    return null;
  }
  if (!statistics) {
    return null;
  }
  const views = statistics?.viewCount;
  const likes = statistics?.likeCount;
  const comments = statistics?.commentCount;
  const thumbnails = snippet?.thumbnails?.default?.url;
  const title = snippet?.title;
  const date = new Date(snippet?.publishedAt);
  const dateFormatted = date?.toLocaleDateString(); // Format the date

  const Earning = Math.min(views) + (10 * comments + 5 * likes);

  const checkHow = () => {};

  return (
    <>
      <div>
        <div className="container">
          <div className="left1">
            <button>Top earner video</button>
            <br />
            <img src={thumbnails} alt="" />
            <span>Update On - </span>
            <span>{dateFormatted}</span>
          </div>
          <div className="mid">
            <p>{title}</p>
            <p>
              <span className="spn-icon">
                <IoEyeSharp />
              </span>{" "}
              {views}
            </p>
            <p>
              <span className="spn-icon">
                <AiTwotoneLike />
              </span>
              {likes}
            </p>
            <p>
              <span className="spn-icon">
                <FaRegMessage />
              </span>{" "}
              {comments}
            </p>
          </div>
          <div className="righ1">
            <div className="con">
              <p>₹ {Earning}</p>
              <button onClick={checkHow}>Check How ?</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
