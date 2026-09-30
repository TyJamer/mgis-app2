// DATA LAYER
function getNameData() {
  return [
    { name: "Liam", gender: "Boy" },
    { name: "Noah", gender: "Boy" },
    { name: "Oliver", gender: "Boy" },
    { name: "James", gender: "Boy" },
    { name: "Elijah", gender: "Boy" },
    { name: "William", gender: "Boy" },
    { name: "Henry", gender: "Boy" },
    { name: "Lucas", gender: "Boy" },
    { name: "Benjamin", gender: "Boy" },
    { name: "Theodore", gender: "Boy" },
    { name: "Olivia", gender: "Girl" },
    { name: "Emma", gender: "Girl" },
    { name: "Charlotte", gender: "Girl" },
    { name: "Amelia", gender: "Girl" },
    { name: "Sophia", gender: "Girl" },
    { name: "Mia", gender: "Girl" },
    { name: "Isabella", gender: "Girl" },
    { name: "Ava", gender: "Girl" },
    { name: "Evelyn", gender: "Girl" },
    { name: "Luna", gender: "Girl" }
  ];
}

let lastSelectedIndex = -1;

// LOGIC LAYER
function getRandomName() {
  const names = getNameData();
  let randomIndex;
  
  do {
    randomIndex = Math.floor(Math.random() * names.length);
  } while (randomIndex === lastSelectedIndex && names.length > 1);

  lastSelectedIndex = randomIndex;
  return names[randomIndex];
}

// DISPLAY LAYER
function updateDisplay() {
  const selected = getRandomName();
  document.getElementById("nameDisplay").textContent = selected.name;
  document.getElementById("genderDisplay").textContent = `(${selected.gender})`;
}

document.getElementById("generateBtn").addEventListener("click", updateDisplay);
