import React, { useContext } from "react";
import "./earning.css";
import Content from "./Content/Content";
import List from "./List/List";
import { VideoContext } from "../context/Context";

const Earning = () => {
  const { snippet, statistics } = useContext(VideoContext);

  return (
    <>
      <div>
        <Content snippet={snippet} statistics={statistics} />
        <List snippet={snippet} statistics={statistics} />
      </div>
    </>
  );
};

export default Earning;
