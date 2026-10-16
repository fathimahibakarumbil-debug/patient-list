
import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingState() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 8,
      }}
    >
      <CircularProgress />
      <Typography color="text.secondary">
        Loading patients...
      </Typography>
    </Box>
  );
}

export default LoadingState;
