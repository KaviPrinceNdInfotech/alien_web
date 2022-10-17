import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Connect from "../Screen/Clips/Connect";
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
        <Connect/>
        
    
        </>
      )}
    </Box>
  );
};

export default ConnectFeed;