async function generate() {
  const story = document.getElementById("story").value;
  const characters = document.getElementById("characters").value;
  const locations = document.getElementById("locations").value;

  document.getElementById("output").textContent = "Generating...";

  try {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ story, characters, locations }),
    });

    const data = await response.json();
    document.getElementById("output").textContent = data.result;
  } catch {
    document.getElementById("output").textContent = "Error occurred";
  }
}