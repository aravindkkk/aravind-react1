import { useEffect, useState } from "react"
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";



const Restaurant = () => {
    const [resInfo, setResInfo] = useState([]);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu =  async () => {
//   const res = await fetch(MENU_API_URL + resId);

//   const result = await res.json();

//   console.log(res);

console.log("ResId:", resId);

  const res = await fetch(MENU_API_URL + resId);

  if (!res.ok) {
    throw new Response("Error", { status: res.status });
  }

  const text = await res.text();
  const d =  text ? JSON.parse(text) : null;
    console.log(res);
};


  //return result; // safe now


    return (
        <div className="menu">
            <h1></h1> 
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
                <li>Menu Item 5</li>
            </ul>

        </div>
    )
}

export default Restaurant