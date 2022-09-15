import React from "react";
import { Controls, ControlButton } from "react-flow-renderer";

function FlowControls() {
    const controllerProps = {
        showZoom: true,
        showFitView: true,
        showInteractive: false,
    }

    return(
        <Controls {...controllerProps}>
            {/* <ControlButton>
                <TestButtonIcon />
            </ControlButton> */}
        </Controls>
    )
}

export default FlowControls;
