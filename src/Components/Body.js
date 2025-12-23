import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { RES_LIST } from "../utils/constants";
import { Link } from "react-router-dom";

function Body() {
    const [listRes, setListRes]                    = useState([]);
    const [searchFieltered, setSearchFilterd]      = useState([]);
    const [searchText, setSearchText]              = useState("");
    useEffect(() =>{    
        fetchData();
    },[]);

    const fetchData = async () => {
     const data = await fetch(RES_LIST);
     console.log(data);
    const json = await data.json();
    const ResData =json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListRes(ResData);
    setSearchFilterd(ResData);
    }
   
    return ( listRes.length === 0? <Shimmer /> :
      
        <div className="body">
            <div className="fileter">
                <button 
                className="filter-btn"
                onClick={() => {

                        const filteredList = listRes.filter((res) => res.info.avgRating > 4);
                        setSearchFilterd(filteredList)
                    }
                }
                >Top Rate Restaurant</button>
                <div>
                    <input type="text" 
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}} 
                        onBlur={() => {
                             const filteredSearchRes = listRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                             ;

                             filteredSearchRes.length === 0 ? setSearchFilterd([]) : setSearchFilterd(filteredSearchRes);

                        }}
                        className="search-input" 
                        placeholder="Search Restaurant" 
                    />
                    {/* <button
                     className="search-btn"
                     onClick={() => {
                        const filteredSearchRes = listRes.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchFilterd(filteredSearchRes);
                     }}
                     >Search</button> */}
                </div>
            </div>
            <div className="res-container">
                {searchFieltered.length === 0 ? <h2>No restaurant found</h2> : searchFieltered.map((res, index) =>(
               <Link key ={res.info.id} to={`/restarant/${res.info.id}`}><ResCard  resData={res} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;