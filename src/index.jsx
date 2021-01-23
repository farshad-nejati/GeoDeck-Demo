import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
 if (import.meta.hot) {
    import.meta.hot.accept();
  }

// import {helloWorld} from './hello-world'

// helloWorld();

// import confetti from 'canvas-confetti';
// confetti.create(document.getElementById('canvas'), {
//   resize: true,
//   useWorker: true,
//  })({ particleCount: 200, spread: 200 });
