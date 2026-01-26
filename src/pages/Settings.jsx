import { useState } from "react";

function Settings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <h2>Settings</h2>

      <label>
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleSave}>Save Changes</button>

      {saved && <p style={{ color: "green" }}>Settings saved!</p>}
    </div>
  );
}

export default Settings;
