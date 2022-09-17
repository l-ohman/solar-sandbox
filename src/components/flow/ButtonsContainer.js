import React from "react";
// import { defaultNodes } from "./defaultNodesEdges";
import useStore from "../../store";
import generatePlanetNode from "./planetGenerator";

function ButtonsContainer({ nodes, edges }) {
  const addNode = useStore((state) => state.addNode);
  const toggleAxes = useStore((state) => state.toggleAxes);

  const handleClick = (e) => {
    let newNode;
    if (e.target.id === "addPlanet") {
      newNode = generatePlanetNode('planet');
    } else {
      newNode = generatePlanetNode('moon');
    }
    addNode(newNode);
  };

  const logState = () => {
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
  };
  const toggleButton = () => {
    toggleAxes();
  };

  return (
    <div id="addNodesTab">
      <button id="addPlanet" onClick={handleClick}>
        Add planet
      </button>
      <button id="addMoon" onClick={handleClick}>
        Add moon
      </button>
      <button onClick={toggleButton}>Toggle axes</button>
      <button onClick={logState}>Log state</button>
    </div>
  );
}

export default ButtonsContainer;
