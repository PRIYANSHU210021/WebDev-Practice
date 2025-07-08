import React, { useState } from "react";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Age Calculator</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br /><br />
      <button onClick={calculateAge}>Calculate Age</button>
      <br /><br />
      {age !== null && <h3>Your Age is: {age} years</h3>}
    </div>
  );
}

export default App;
