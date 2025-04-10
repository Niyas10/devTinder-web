import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { userFeeds } from "../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slices/feedSlice";
import ShowFeed from "../components/Feed/ShowFeed";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await userFeeds();
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error("error", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Navbar />
    {
      feed && ( <ShowFeed  user={feed[0]}   /> ) 
    }
    </>
  );
};

export default Feed;
