const heading = React.createElement("div", { id: "hello" },[ React.createElement("h2",{id:"pika"},"Pikachu"), React.createElement("h2",{id:"richu"},"Raichu")]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
