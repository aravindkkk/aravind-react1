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

        const res = await fetch(MENU_API_URL + resId);

       // const json = await res.json();
       // setResInfo(json.data);
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