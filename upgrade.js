function Upgrade() {
  const API_KEY = "YOUR_API_KEY";

  const upgradePlan = async (plan) => {
    const res = await fetch("http://localhost:8000/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify({ plan })
    });

    const data = await res.json();
    window.location.href = data.checkout_url;
  };

  return (
    <div>
      <h2>Upgrade Plan</h2>
      <button onClick={() => upgradePlan("BASIC")}>
        Upgrade to BASIC – ₹799/month
      </button>
      <br /><br />
      <button onClick={() => upgradePlan("PRO")}>
        Upgrade to PRO – ₹2499/month
      </button>
    </div>
  );
}

export default Upgrade;
