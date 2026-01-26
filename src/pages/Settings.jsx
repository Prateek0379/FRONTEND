import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Settings() {
  const { user, setUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  function handleSave() {
    setSaving(true);

    // Simulate save (backend hook can be added later)
    setTimeout(() => {
      setUser((prev) => ({ ...prev, name }));
      setSaving(false);
      setSaved(true);

      setTimeout(() => setSaved(false), 2000);
    }, 800);
  }

  return (
    <div className="ui-dashboard">
      <h2>Settings</h2>

      <div style={{ marginTop: 24, maxWidth: 420 }}>
        <label style={{ display: "block", marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>
            Full Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #1e293b",
              backgroundColor: "#020617",
              color: "#e5e7eb",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 20 }}>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>
            Email
          </span>
          <input
            type="email"
            value={email}
            disabled
            style={{
              width: "100%",
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #1e293b",
              backgroundColor: "#020617",
              color: "#64748b",
              cursor: "not-allowed",
            }}
          />
        </label>

        <button
          className="ui-btn primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        {saved && (
          <p style={{ marginTop: 12, color: "#22c55e" }}>
            Settings saved successfully
          </p>
        )}
      </div>
    </div>
  );
}

export default Settings;
