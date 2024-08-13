// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello from React"
// );
//createElement gives react element that is nothing but a js object not an html element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "c1h1" }, "im h1 tag"),
    React.createElement("h1", { id: "c1h2" }, "im h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "c2h1" }, "im h1 tag"),
    React.createElement("h1", { id: "c2h2" }, "im h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot((document = document.getElementById("root")));
root.render(parent); // render converts react element(js object) to html element then put it inside DOM
