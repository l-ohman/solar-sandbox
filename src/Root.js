import React from "react";
import { Header, Footer, NodeGraph, Canvas } from "./components";

export default function Root() {
  return (
    <>
      <Header />
      <div id="main-container">
        <NodeGraph />
        <Canvas />
      </div>
      <Footer />
    </>
  );
}
