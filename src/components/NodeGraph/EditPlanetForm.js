import React from "react";
import useStore from "../../store";
import generatePlanetNode from "./planetGenerator";

//todo: refactor this component
export default function EditPlanetForm(props) {
  const nodes = useStore((state) => state.nodes);
  const updateNodes = useStore((state) => state.updateNodes);
  const addNode = useStore((state) => state.addNode);

  const [form, setForm] = React.useState(props);
  const [canUpdateColor, setCanUpdateColor] = React.useState(true);

  const handleChange = (e) => {
    if (canUpdateColor) {
      // for local changes
      let updatedForm = {
        ...form,
        [e.target.name]: e.target.value,
      };
      setForm(updatedForm);

      // nodes not updating correctly
      let nodeToUpdate = nodes.find((node) => node.id === props.id);
      nodeToUpdate.data = updatedForm;

      let nodeList = [...nodes.filter((node) => node.id !== props.id)];
      nodeList.push(nodeToUpdate);

      updateNodes(nodeList);

      // quick color changes are expensive, so this only allows updating at certain intervals
      setCanUpdateColor(false);
      setTimeout(() => setCanUpdateColor(true), 100);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();

    // changing the increment amount depending on the updated value type
    let incrementAmt = 1;
    if (e.target.name === "size") {
      incrementAmt *= 0.2;
    } else if (e.target.name === "speed") {
      // should change angular speed to linear speed if using this method to increment
      incrementAmt *= 7;
    }

    let updatedValue;
    if (e.target.innerText === "+") {
      updatedValue = form[e.target.name] + incrementAmt;
    } else {
      updatedValue = form[e.target.name] - incrementAmt;
    }
    let updatedForm = {
      ...form,
      [e.target.name]: updatedValue,
    };
    setForm(updatedForm);

    // nodes not updating correctly
    let nodeToUpdate = nodes.find((node) => node.id === props.id);
    nodeToUpdate.data = updatedForm;

    let nodeList = [...nodes.filter((node) => node.id !== props.id)];
    nodeList.push(nodeToUpdate);

    updateNodes(nodeList);
  };

  const createMoon = () => {
    const newMoon = generatePlanetNode("moon", form.id);
    addNode(newMoon);
  };

  return (
    <>
      {/* checks if form is on a Moon or Planet */}
      {form.id[0] === "P" ? (
        <button id="addMoon" onClick={createMoon}>
          Add moon
        </button>
      ) : (
        ""
      )}

      <form>
        <label>
          <p>color:</p>
          <input
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
          />
        </label>

        <label>
          <p>size:</p>
          <div>
            <button name="size" onClick={handleIncrement}>
              -
            </button>
            <button name="size" onClick={handleIncrement}>
              +
            </button>
          </div>
        </label>

        <label>
          <p>distance:</p>
          <div>
            <button name="distance" onClick={handleIncrement}>
              -
            </button>
            <button name="distance" onClick={handleIncrement}>
              +
            </button>
          </div>
        </label>

        <label>
          <p>speed:</p>
          <div>
            <button name="speed" onClick={handleIncrement}>
              -
            </button>
            <button name="speed" onClick={handleIncrement}>
              +
            </button>
          </div>
        </label>
      </form>
    </>
  );
}
