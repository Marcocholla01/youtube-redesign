import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Sidebar, Videos } from "./";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          sx={{ mt: 1.5, color: "#fff", display: { md: "flex", xs: "none" } }}
        >
          Copyright &copy; 2024 Youtube-v2.0
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          flex: 2,
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb="2"
          sx={{
            color: "white",
          }}
        >
          New <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
