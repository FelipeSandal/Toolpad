import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 7,
      }}
    >
      <CircularProgress
        sx={{
          color: "black",
        }}
      />
    </Box>
  );
}
