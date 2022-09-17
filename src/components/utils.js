export function orbitCalculator(
  distance,
  currentPos,
  speed = 1, // 'speed' expressed as angular distance
  parentPos = [0, 0, 0]
) {
  // still need to fix the planet 'speeding up' when it is closer to center of system
  let angle = Math.atan2(
    currentPos[0] - parentPos[0],
    currentPos[2] - parentPos[2]
  );
  speed = speed * 0.001;

  let x = Math.sin(angle + speed) * distance + parentPos[0];
  let z = Math.cos(angle + speed) * distance + parentPos[2];
  return [x, 0, z];
}

export function restructureStoreData(nodes, edges) {
  let output = [];

  // get all planets connected to sun
  edges.forEach((edge) => {
    if (edge.source === "sun") {
      let planet = nodes.find((node) => node.id === edge.target);
      planet.moons = [];
      output.push(planet);
    }
  });

  // get all moons connected to each planet
  edges.forEach((edge) => {
    if (edge.source !== "sun") {
      let moon = nodes.find((node) => node.id === edge.target);
      let planet = output.find((node) => node.id === edge.source);
      if (planet.moons) {
        planet.moons.push(moon);
      }
    }
  });

  return output;
}

export function generateStars(count = 300) {
  let generateStarPosition = () => {
    let [x, y, z] = [
      Math.random() * 200,
      Math.random() * 150,
      Math.random() * 200,
    ];
    
    if (x < 90 && y < 50 && z < 90) {
      if (Math.random() > 0.5) {
        x = 100 + Math.random * 75;
      } else {
        z = 100 + Math.random * 75;
      }
    }

    if (Math.random() > 0.5) {
      x = -x;
    }
    if (Math.random() > 0.5) {
      y = -y;
    }
    if (Math.random() > 0.5) {
      z = -z;
    }
    return [x, y, z];
  };

  let allStars = [];
  for (let i = 0; i < count; i++) {
    let star = {
      position: generateStarPosition(),
      color: Math.random() < 0.66 ? "gray" : "darkgray"
    }
    allStars.push(star);
  }
  return allStars;
}
