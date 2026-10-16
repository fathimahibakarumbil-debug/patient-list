import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function PatientTable({ patients = [] }) {
  const getValue = (patient, keys) => {
    for (const key of keys) {
      const value = patient?.[key];

      if (value !== null && value !== undefined && value !== "") {
        return value;
      }
    }

    return "-";
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#eff6ff" }}>
            {["Reg. ID", "Name", "Gender", "Age", "Mobile", "Address"].map(
              (heading) => (
                <TableCell
                  key={heading}
                  sx={{
                    fontWeight: 700,
                    color: "#1e3a8a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {heading}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {patients.length > 0 ? (
            patients.map((patient, index) => (
              <TableRow
                key={patient.id ?? patient.registration_id ?? index}
                hover
              >
                {/* Registration ID */}
                <TableCell>
                  {getValue(patient, [
                    "registration_id",
                    "reg_id",
                    "registration_no",
                  ])}
                </TableCell>

                {/* Patient Name */}
                <TableCell>
                  {getValue(patient, [
                    "patient_name",
                    "name",
                    "full_name",
                  ])}
                </TableCell>

                {/* Gender */}
                <TableCell>
                  {getValue(patient, ["gender", "sex"])}
                </TableCell>

                {/* Age */}
                <TableCell>
                  {getValue(patient, ["age", "patient_age"])}
                </TableCell>

                {/* Mobile */}
                <TableCell>
                  {getValue(patient, [
                    "mobile_no",
                    "mobile",
                    "phone",
                    "phone_number",
                  ])}
                </TableCell>

                {/* Address */}
                <TableCell sx={{ minWidth: 180 }}>
                  {getValue(patient, [
                    "address",
                    "patient_address",
                  ])}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ py: 5 }}>
                <Typography color="text.secondary">
                  No patients found.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientTable;