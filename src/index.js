import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";

import "./less/main.less"
import Root from "./components/Root";
import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Root />
    </Provider>
)
