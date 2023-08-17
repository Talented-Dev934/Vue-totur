import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Brouther } from "../../src";
import { router } from "./routes";
import "./index.css";
import { Scroll } from "../../src/brouther/scroll";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Brouther ErrorElement={<p>Error</p>} config={router.config}>
                <Scroll behavior="smooth">
                    <App />
                </Scroll>
            </Brouther>
        </React.Suspense>
    </React.StrictMode>
);
