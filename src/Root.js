import React from "react";
import { Header, Footer, Flow, Canvas } from "./components"

function Root() {
    return(
        <>
            <Header />
            <div id="main-container">
                <Flow />
                <Canvas />
            </div>
            <Footer />
        </>
    )
}

export default Root;
