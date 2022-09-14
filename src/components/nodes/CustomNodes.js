import React from "react";
import { Handle, Position } from 'react-flow-renderer';

function CustomNode({ data }) {
    // Don't forget to use 'useCallback' for functions

    // 'Handle' components allow node connections
    // 'Position' lets us set the location of the connection point
    return(
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <p>{data}</p>
            </div>
            <Handle type="source" position={Position.Bottom}/>
        </>
    )
};

export default CustomNode;

