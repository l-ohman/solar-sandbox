// todo: separate functions for generating planets/moons

function generatePlanetName(type, length) {
  let characters = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789123456789";
  let name = "";
  for (let i = 0; i < length; i++) {
    let newChar = characters[Math.floor(Math.random() * characters.length)];
    name += newChar;
  }
  type = type[0].toUpperCase() + type.slice(1);
  return `${type} ${name}`;
}

function generateNodePosition(type) {
  let x = Math.random() * 400 - 160;
  let y = Math.random() * 90 + (type === "moon" ? 350 : 80);
  return { x, y };
}

// Better for this to be an array - dark colors don't show up well
const colors = [
  "#E52626",
  "#F4B32D",
  "#ACF42D",
  "#26E074",
  "#23C3E0",
  "#2E22E0",
  "#A22DE5",
  "#E92BCD",
];
function generatePlanetData(id, type) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let size;
  let distance;
  let speed = Math.random() * 6 + 8;
  if (type === "planet") {
    size = Math.random() * 1.4 + 0.7;
    distance = Math.random() * 18 + 6;
  } else {
    size = Math.random() * 0.5 + 0.25;
    distance = Math.random() * 3 + 2;
    speed *= 2;
  }
  return {
    id,
    color,
    size,
    distance,
    speed,
  };
}

// type as 'planet' or 'moon'
export default function generatePlanetNode(type, parent = null) {
  let id = generatePlanetName(type, 3);
  let className = `node ${type}Node`;
  let position = generateNodePosition(type);
  let data = generatePlanetData(id, type);
  return {
    id,
    type,
    position,
    className,
    data,
    parent,
  };
}
