import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");


const HeadingJsx = () => (
  <div>
    <h1 className="heading">Hello World Using JSX</h1>
    <p>This is a simple para</p>
  </div>
);

const nymber = 1000;
const HeadingComponet = () => (
    <div id="container">
{nymber}
{12 + 23}
        <HeadingJsx/>
    <h1 className="heading">Hello World Using Componets</h1>
  </div>
);

const handlingComponet2 = () => (<h1>Hello Using Funcational Componet</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponet />);
