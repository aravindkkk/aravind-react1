import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

function Body() {
    const [resLiistInfo, searchResListInfo, setSearchResListInfo, searchText, setSearchText] 
    = useRestaurantInfo();
    return ( resLiistInfo.length === 0? <Shimmer /> :
      
        <div className="body">
            <div className="fileter">
                <button 
                className="filter-btn"
                onClick={() => {
                        const filteredList = resLiistInfo.filter((res) => res.info.avgRating > 4);
                        setSearchResListInfo(filteredList);
                    }
                    
                }
                >Top Rate Restaurant</button>
                <div>
                    <input type="text" 
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}} 
                        onBlur={() => {
                             const filteredSearchRes = resLiistInfo.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                             ;

                             filteredSearchRes.length === 0 ? setSearchResListInfo([]) : setSearchResListInfo(filteredSearchRes);

                        }}
                        className="search-input" 
                        placeholder="Search Restaurant" 
                    />
                   
                </div>
            </div>
            <div className="res-container">
                {
                searchResListInfo.length === 0 ? <h2>No restaurant found</h2> : searchResListInfo.map((res) =>(
               <Link key ={res.info.id} to={`/restarant/${res.info.id}`}><ResCard  resData={res} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;