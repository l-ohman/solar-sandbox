import React from "react";
import useStore from "../../store";

function EditPlanetForm(props) {
    // This component desperately needs refactoring !
    const nodes = useStore(state => state.nodes);
    const updateNodes = useStore(state => state.updateNodes);

    const [form, setForm] = React.useState(props);

    const handleChange = (e) => {
        // for local changes
        let updatedForm = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(updatedForm);

        // for state changes -- maybe could use 'applyNodeChanges' for this?
        let updatedNodeList = nodes.filter(node => node.id !== props.id);
        let nodeToUpdate = nodes.find(node => node.id === props.id);
        nodeToUpdate.data = updatedForm
        updatedNodeList.push(nodeToUpdate);
        updateNodes(updatedNodeList);
    }

    const handleIncrement = (e) => {
        e.preventDefault();

        // changing the increment amount depending on the updated value type
        let incrementAmt = 1;
        if (e.target.name === "size") {
            incrementAmt *= 0.2;
        } else if (e.target.name === "speed") {
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
        }
        setForm(updatedForm);

        // see 'applyNodeChanges'
        let updatedNodeList = nodes.filter(node => node.id !== props.id);
        let nodeToUpdate = nodes.find(node => node.id === props.id);
        nodeToUpdate.data = updatedForm;
        updatedNodeList.push(nodeToUpdate);
        updateNodes(updatedNodeList);
    }

    return(
        <form>
            <label>
                <p>color:</p>
                <input type="color" name="color" value={form.color} onChange={handleChange}/>
            </label>

            <label>
                <p>size:</p>
                <div>
                <button name="size" onClick={handleIncrement}>-</button>
                <button name="size" onClick={handleIncrement}>+</button>
                </div>
            </label>

            <label>
                <p>distance:</p>
                <div>
                <button name="distance" onClick={handleIncrement}>-</button>
                <button name="distance" onClick={handleIncrement}>+</button>
                </div>
            </label>

            <label>
                <p>speed:</p>
                <div>
                <button name="speed" onClick={handleIncrement}>-</button>
                <button name="speed" onClick={handleIncrement}>+</button>
                </div>
            </label>

        </form>
    )
}

export default EditPlanetForm;
