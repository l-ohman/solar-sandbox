import React from "react";
import { createRoot } from "react-dom/client";

import "./less/main.less";
import Root from "./Root";

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
