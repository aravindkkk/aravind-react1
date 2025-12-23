import { useEffect, useState } from "react";

const User = (props) => {
   const {name, location} = props;
   const [count,setCount] = useState(0);
   const [count1] = useState(1);
  
    return (
        <div className="user-card">
             <button onClick={() => {
                setCount(count + 1);
             }
        }>Count
                </button>
            <p>{count}</p>
            <p>{count1}</p>
            <h1>About Us Page</h1>
            <p>Functional Component</p>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
        </div>
    )

}

export default User;