import React from "react";
import useStore from "../../store";
import generatePlanetNode from "./planetGenerator";

function ButtonsContainer({ nodes, edges }) {
  const addNode = useStore((state) => state.addNode);
  const clearAll = useStore((state) => state.clearAll);

  const handleClick = (e) => {
    const newNode = generatePlanetNode("planet");
    addNode(newNode);
  };
  const clearSystem = () => {
    if (
      confirm(
        "Are you sure you want to delete everything in your solar system?"
      )
    ) {
      clearAll();
    }
  };
  const logState = () => {
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
  };

  return (
    <div id="addNodesTab">
      <button id="addPlanet" onClick={handleClick}>
        Add planet
      </button>
      {/* <button id="addMoon" onClick={handleClick}>
        Add moon
      </button> */}
      <button id="clearSystem" onClick={clearSystem}>
        Clear system
      </button>
      <button onClick={logState}>Log state</button>
      <button onClick={() => console.log("Open tutorial modal placeholder")}>
        Help
      </button>
    </div>
  );
}

export default ButtonsContainer;
