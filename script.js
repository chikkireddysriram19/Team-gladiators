 function showCharacterInput() {
  document.getElementById("characterInputContainer").classList.remove("hidden");
}

function addCharacter() {
  const input = document.getElementById("newCharacterName");
  const name = input.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${name}
    <span class="remove" onclick="this.parentElement.remove()">✕</span>
  `;
  document.getElementById("charactersList").appendChild(li);

  input.value = "";
}

function showLocationInput() {
  document.getElementById("locationInputContainer").classList.remove("hidden");
}

function addLocation() {
  const input = document.getElementById("newLocationName");
  const name = input.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${name}
    <span class="remove" onclick="this.parentElement.remove()">✕</span>
  `;
  document.getElementById("locationsList").appendChild(li);

  input.value = "";
}

async function generate() {

  const story = document.getElementById("story").value;

  let characters = "";
  document.querySelectorAll("#charactersList li").forEach(li => {
    characters += li.childNodes[0].textContent.trim() + "\n";
  });

  let locations = "";
  document.querySelectorAll("#locationsList li").forEach(li => {
    locations += li.childNodes[0].textContent.trim() + "\n";
  });

  document.getElementById("loading").classList.remove("hidden");

  const response = await fetch("https://your-backend-url.onrender.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ story, characters, locations })
  });

  const data = await response.json();

  document.getElementById("loading").classList.add("hidden");

  document.getElementById("output").textContent = data.result;
}
