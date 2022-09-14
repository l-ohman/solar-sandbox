import React from "react";
import { Header, Footer, Canvas } from "./"

function Root() {
    return(
        <>
            <Header />
            <div id="main-container">
                <Canvas />
            </div>
            <Footer />
        </>
    )
}

export default Root;
