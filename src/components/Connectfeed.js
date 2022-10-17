import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";

// import Post from "./Post";
// import Clips from "../Screen/Clips/Clips";
// import Connect from "../Screen/Clips/Connect";
import Banner from "../Screen/Clips/Banner";

import Feed from "./Feed";

const ConnectFeed = (props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
        <Banner/>
         <Feed/>
        
        {/* <Post/> */}
        </>
      )}
    </Box>
  );
};

export default ConnectFeed;