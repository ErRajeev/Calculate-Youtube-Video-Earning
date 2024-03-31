import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./earning.css";
import { IoCall } from "react-icons/io5";
import Content from "../Content/Content";
import List from "../List/List";
import { VideoContext } from "../context/Context";

const Earning = () => {
  const { snippet, statistics } = useContext(VideoContext);

  return (
    <>
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
          <Content snippet={snippet} statistics={statistics} />
          <List snippet={snippet} statistics={statistics} />
        </div>
      </div>
    </>
  );
};

export default Earning;
