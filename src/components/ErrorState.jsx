
import { Alert, Box } from "@mui/material";

function ErrorState({ message }) {
  return (
    <Box sx={{ p: 3 }}>
      <Alert severity="error">
        {message || "Unable to fetch patients. Please try again."}
      </Alert>
    </Box>
  );
}

export default ErrorState;
