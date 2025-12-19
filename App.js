import React from "react";
import ReactDOM from "react-dom/client";

const Parent = () => (<h1>This is Jsx file</h1>);

const ParentComponent = () => (
 <div>  
    <Parent /> 
    {Parent()}
<h2>This is react componenet</h2>
<h1>this is another h1</h1>
</div>
)


const root     = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent />);

