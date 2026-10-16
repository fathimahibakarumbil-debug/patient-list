import axios from "axios";

const api = axios.create({
  baseURL: "/api",
// baseURL: "/apis",
  auth: {
    username: "doctosmarttest",
    password:
      "$2y$12$9Za7UtNOljRUWVmVrq8yv.ZpuzEhK6yzI.gdKRCxw2EtUfvxySV3S",
  },
});

export async function fetchPatients() {
  try {
    const response = await api.get("/patients", {
      params: {
        user_id: 1,
        clinic_id: 1,
        page_no: 0,
      },
    });

    const data = response.data;

    console.log("Patient API response:", data);

    // Extract the patient list from the API response
    const patients = Array.isArray(data)
      ? data
      : data?.result ??
        data?.data ??
        data?.patients ??
        data?.results ??
        [];

    if (!Array.isArray(patients)) {
      throw new Error("Invalid patient data received from API.");
    }

    console.log("Total patients received:", patients.length);
    console.log("First patient details:", patients[0]);

    return patients;
  } catch (error) {
    console.error("Failed to fetch patients:", error);
    throw error;
  }
}
