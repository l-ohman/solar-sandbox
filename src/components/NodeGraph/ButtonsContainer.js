import React from "react";
import useStore from "../../store";
import HelpWindow from "./HelpWindow";
import generatePlanetNode from "./planetGenerator";

export default function ButtonsContainer({ nodes, edges }) {
  const addNode = useStore((state) => state.addNode);
  const clearAll = useStore((state) => state.clearAll);
  const [helpModal, setHelpModal] = React.useState(false);

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
      <button id="clearSystem" onClick={clearSystem}>
        Clear system
      </button>
      {/* <button onClick={logState}>Log state</button> */}
      <button onClick={() => setHelpModal(true)}>Help</button>
      {helpModal && <HelpWindow closeWindow={() => setHelpModal(false)} />}
    </div>
  );
}
