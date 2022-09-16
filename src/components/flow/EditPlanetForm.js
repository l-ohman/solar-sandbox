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

        let updatedValue;
        if (e.target.innerText === "+") {
            updatedValue = form[e.target.name] + 0.1;
        } else {
            updatedValue = form[e.target.name] - 0.1;
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
                <button name="size" onClick={handleIncrement}>-</button>
                <button name="size" onClick={handleIncrement}>+</button>
            </label>

            <label>
                <p>distance:</p>
                <button>-</button><button>+</button>
            </label>

            <label>
                <p>speed:</p>
                <button>-</button><button>+</button>
            </label>

        </form>
    )
}

export default EditPlanetForm;
