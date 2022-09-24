import React from "react";
import useStore from "../../store";
import generatePlanetNode from "./planetGenerator";

function ButtonsContainer({ nodes, edges }) {
  const addNode = useStore((state) => state.addNode);
  const clearAll = useStore(state => state.clearAll);
  const toggleAxes = useStore((state) => state.toggleAxes);

  const [devTools, showDevTools] = React.useState(false);

  const handleClick = (e) => {
    let newNode = generatePlanetNode("planet");
    // if (e.target.id === "addPlanet") {
    //   newNode = generatePlanetNode('planet');
    // } else {
    //   newNode = generatePlanetNode('moon');
    // }
    addNode(newNode);
  };
  const clearSystem = () => {
    if (confirm("Are you sure you want to delete everything in your solar system?")) {
      clearAll();
    }
  };
  const toggleDevTools = () => {
    showDevTools(!devTools);
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
      {/* <button id="addMoon" onClick={handleClick}>
        Add moon
      </button> */}
      <button id="clearSystem" onClick={clearSystem}>
        Clear system
      </button>
      {devTools ? (
        <>
          <button onClick={toggleButton}>Toggle axes</button>
          <button onClick={logState}>Log state</button>
          <button onClick={toggleDevTools}>Hide dev tools</button>
        </>
      ) : (
        <>
          <button onClick={toggleDevTools}>Show dev tools</button>
        </>
      )}
    </div>
  );
}

export default ButtonsContainer;
