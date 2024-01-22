import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TweetCard from "../components/TweetCard";
import AddTweetForm from "../components/AddTweetForm";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { getUser } from "../utils/authCookies";

function Feed() {
  const user = getUser();

  const [feedList, setFeedList] = useState([]);
  const feedFetch = async () => {
    try {
      const q = query(collection(db, "post"));
      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push(doc.data());
        // console.log(doc.id, " => ", doc.data());
      });
      setFeedList(list);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    feedFetch();
  }, []);

  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <AddTweetForm user={user}/>
      <Typography
        color="whitesmoke"
        variant="h1"
        sx={{
          w: 1,
          position: "absolute",
          top: -25,
          zIndex: -1,
          fontSize: 110,
        }}
      >
        NewsFeed
      </Typography>
      <Box sx={{ w: 1, pt: 1 }}>
        {feedList?.map((feed, index) => (
          <TweetCard shadow={true} feed={feed} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default Feed;
