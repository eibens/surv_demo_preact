// This triple-slash directive is needed to use the DOM.
/// <reference lib="dom"/>

import { Hello } from "./components/Hello.tsx";
import { React } from "./deps/preact.ts";

// Reload the page whenever a WebSocket message is received.
new WebSocket("ws://localhost:1234")
  .addEventListener("message", () => window.location.reload());

React.render(<Hello name="world" />, document.body);
