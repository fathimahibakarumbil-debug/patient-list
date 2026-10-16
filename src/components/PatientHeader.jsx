
import { Box, Typography } from "@mui/material";

function PatientHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="overline"
        sx={{
          color: "#2563eb",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        PATIENT MANAGEMENT
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: "#172554",
          mt: 1,
        }}
      >
        Patient List
      </Typography>

      <Typography sx={{ color: "#64748b", mt: 1 }}>
        View patient registration details
      </Typography>
    </Box>
  );
}

export default PatientHeader;
