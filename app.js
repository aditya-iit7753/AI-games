import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const API_KEY = "YOUR_API_KEY";
  const API_URL = "http://localhost:8000/generate-game";

  const generateGame = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>🎮 Mood-Based Game AI</h2>

      <input
        type="text"
        placeholder="How are you feeling?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <br /><br />

      <button onClick={generateGame}>Generate Game</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Mood: {result.mood}</h3>
          <p><b>Place:</b> {result.game_config.place}</p>
          <p><b>Mode:</b> {result.game_config.mode}</p>
          <p><b>Weapon:</b> {result.game_config.weapon}</p>
          <p><b>Difficulty:</b> {result.game_config.difficulty}</p>
        </div>
      )}
    </div>
  );
}

// Removed duplicate default export to fix the error
import Upgrade from "./Upgrade";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);

  const ADMIN_KEY = "admin-secret-123";
  const API_URL = "https://your-backend-url/admin";

  useEffect(() => {
    fetch(API_URL + "/stats", {
      headers: { "x-admin-key": ADMIN_KEY }
    })
      .then(res => res.json())
      .then(data => setStats(data));

    fetch(API_URL + "/users", {
      headers: { "x-admin-key": ADMIN_KEY }
    })
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📊 Admin Dashboard</h1>

      {stats && (
        <>
          <h3>Overview</h3>
          <p>👤 Total Users: {stats.users}</p>
          <p>📈 Total API Requests: {stats.total_requests}</p>
          <p>💰 Monthly Revenue: ₹{stats.monthly_revenue}</p>

          <h4>Plans</h4>
          {stats.plans.map(p => (
            <p key={p.plan}>
              {p.plan}: {p.count}
            </p>
          ))}
        </>
      )}

      <hr />

      <h3>Users</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Plan</th>
            <th>API Key</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.plan}</td>
              <td>{u.api_key}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { AdminDashboard };
import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>🎮 Emotion-Aware Game AI</h1>
        <p>
          Games that adapt to player mood in real time.
          Powering next-gen gameplay using AI.
        </p>
        <button>Get API Access</button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Developers Love It</h2>
        <div className="grid">
          <div>🧠 Mood-based gameplay</div>
          <div>⚡ Real-time adaptation</div>
          <div>🎯 Dynamic difficulty</div>
          <div>🔌 Unity & Godot SDK</div>
          <div>💳 Built-in monetization</div>
          <div>📊 Admin analytics</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>
        <ol>
          <li>Player shares mood or behavior</li>
          <li>AI detects emotion</li>
          <li>Gameplay adapts instantly</li>
          <li>Player engagement increases</li>
        </ol>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="cards">
          <div className="card">
            <h3>FREE</h3>
            <p>₹0 / month</p>
            <p>100 requests</p>
          </div>

          <div className="card popular">
            <h3>BASIC</h3>
            <p>₹799 / month</p>
            <p>5,000 requests</p>
          </div>

          <div className="card">
            <h3>PRO</h3>
            <p>₹2499 / month</p>
            <p>50,000 requests</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Build Games That Feel Human</h2>
        <button>Start Free</button>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Emotion-Aware Game AI
      </footer>
    </div>
  );
}
