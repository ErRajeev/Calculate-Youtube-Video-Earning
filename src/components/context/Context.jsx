import React, { createContext, useState } from "react";

export const VideoContext = createContext({
  snippet: {},
  setSnippet: () => {},
  statistics: {},
  setStatistics: () => {},
});

export const VideoProvider = ({ children }) => {
  const [snippet, setSnippet] = useState({});
  const [statistics, setStatistics] = useState({});

  return (
    <VideoContext.Provider
      value={{ snippet, setSnippet, statistics, setStatistics }}
    >
      {children}
    </VideoContext.Provider>
  );
};
