import ResCard from "./ResCard";
import resObj from "../utils.js/mockData";
import { useState } from "react";

function Body() {

    const [filteredRes, setFilteredRes] = useState(resObj)
    return (
        <div className="body">
            <div className="fileter">
                <button 
                className="filter-btn"
                onClick={() => {

                        const filteredList = filteredRes.filter((res) => res.data.avgRating > 4);
                        setFilteredRes(filteredList)
                    }
                }
                >Top Rate Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRes.map((res) =>(
                <ResCard key ={res.data.id} resData={res} />
                ))}
            </div>
        </div>
    );
}

export default Body;