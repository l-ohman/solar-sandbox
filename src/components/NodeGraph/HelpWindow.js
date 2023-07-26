import React from "react";

export default function HelpWindow({ closeWindow }) {
  const handleClose = (e) => {
    if (e.target.id === "modal-window") return;
    else closeWindow();
  };
  
  return (
    <div id="modal-container" onClick={handleClose}>
      <dialog open id="modal-window">
        This is a help window
        <button onClick={closeWindow}>Close window</button>
      </dialog>
    </div>
  );
}
