import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFeeds } from "../api/userApi";
import { addFeed } from "../store/slices/feedSlice";

const useFetchFeed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    const feedFetch = async () => {
      if (feed) return;

      try {
        const res = await userFeeds();
        if (res?.data?.data) {
          dispatch(addFeed(res.data.data));
        }
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };

    feedFetch();
  }, [dispatch, feed]);

  return feed;
};

export default useFetchFeed;
