import React from "react";

export default function HelpWindow({ closeWindow }) {
  const handleClose = (e) => {
    if (e.target.id !== "modal-container") return;
    else closeWindow();
  };

  return (
    <div id="modal-container" onClick={handleClose}>
      <dialog open id="modal-window">
        <button id="close-window" onClick={closeWindow}>
          X
        </button>
        <h1 id="modal-help">Tutorial</h1>

        <p className="tutorial-paragraph">The view is split into two parts:</p>
        <ul>
          <li>
            the <b>node graph editor</b>, where you can tweak your planets and
            moons
          </li>
          <li>
            the <b>3D view</b>, where your system updates in real time!
          </li>
        </ul>

        <hr className="modal-hr" />

        <h2 className="tutorial-subheader">Node graph editor</h2>
        <p className="tutorial-paragraph">
          You can move planets and moons around by clicking and dragging.
        </p>
        <p className="tutorial-paragraph">
          To create planets, click the "Add Planet" button in the top left of
          the screen.
          {/* image placeholder */}
        </p>
        <p className="tutorial-paragraph">
          To create moons, click the "Add Moon" button on any planet.
          {/* image placeholder */}
        </p>

        <hr className="modal-hr" />

        <h2 className="tutorial-subheader">3D view</h2>
        <p className="tutorial-paragraph">
          To pan the camera, hold left click in the 3D window and move the
          mouse.
        </p>
        <p className="tutorial-paragraph">
          You can zoom in and out with the scrollwheel.
        </p>
        <p className="tutorial-paragraph">
          To pause and play the orbits, click on the sun.
        </p>

        <button id="close-button" onClick={closeWindow}>
          Close window
        </button>
      </dialog>
    </div>
  );
}
