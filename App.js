//const heading  = React.createElement("h1", {id:"heading"}, "Hello World From Namaste React!!!");


const parent = React.createElement("div", {id:"parent"},[
         React.createElement("div", {id:"child1"},
        [React.createElement("h1", {}, "I am h1 tag from child 1"),
        React.createElement("h2", {}, "I am h2 tag from child 1")]
    ),
     React.createElement("div", {id:"child2"},
        [React.createElement("h1", {}, "I am h1 tag from child 1"),
        React.createElement("h2", {}, "I am h2 tag from child 1")]
    ),
])


const root     = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);