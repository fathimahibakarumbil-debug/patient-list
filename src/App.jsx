

import { useEffect, useState } from "react";
import { Box, Container, Button } from "@mui/material";
import { fetchPatients } from "./services/patientService";
import PatientHeader from "./components/PatientHeader";
import PatientTable from "./components/PatientTable";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPatients() {
    setLoading(true);
    setError("");

    try {
      const data = await fetchPatients();
      setPatients(data);
    } catch (err) {
      console.error("Patient API error:", err);

      if (err.response) {
        setError(
          `Unable to fetch patients. Server returned error ${err.response.status}.`
        );
      } else if (err.request) {
        setError(
          "Unable to connect to the patient API. Please check your connection and try again."
        );
      } else {
        setError(
          err.message || "Something went wrong while fetching patients."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <Box className="app">
      <Container maxWidth="lg">
        <PatientHeader />

        <Box className="patient-card">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <Box>
              <ErrorState message={error} />
              <Box sx={{ px: 3, pb: 3 }}>
                <Button variant="contained" onClick={loadPatients}>
                  Try Again
                </Button>
              </Box>
            </Box>
          ) : (
            <PatientTable patients={patients} />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
