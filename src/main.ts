import "./app.css" assert { type: "css" };
import "./styles/index.css" assert { type: "css" };
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
  hydrate: true,
});

export default app;
