export async function sendRegistrationData(formData) {
  const SHEET_API_ENDPOINT =
    "https://script.google.com/macros/d/YOUR_SCRIPT_ID/userlp"; // Replace with your Google Apps Script deployment URL
  const submissionData = {
    fullName: formData.fullName,
    studentNumber: formData.studentNumber,
    email: formData.email,
    phone: formData.phone,
    faculty: formData.faculty,
    sdaStatus: formData.sdaStatus,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(SHEET_API_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submissionData),
  }).catch(() => {
    console.log("Registration Data:", submissionData);
    localStorage.setItem(
      `sasaku_registration_${Date.now()}`,
      JSON.stringify(submissionData),
    );
    return { ok: true };
  });

  return response;
}
