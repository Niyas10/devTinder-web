import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import ShowFeed from "../components/Feed/ShowFeed";
import FetchFeed from "../hooks/FetchFeed";

const Feed = () => {
  const feed = FetchFeed();

  return (
    <>
      <Navbar />
      {feed   && <ShowFeed user={feed[0]} />}
    </>
  );
};

export default Feed;
