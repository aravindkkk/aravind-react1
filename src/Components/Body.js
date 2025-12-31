import ResCard, {withPromotedLabel} from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useEffect } from "react";
import userContext from "../utils/UserContext";

function Body() {
    const [resLiistInfo, searchResListInfo, setSearchResListInfo, searchText, setSearchText] 
    = useRestaurantInfo();
    const PromotedResCard = withPromotedLabel(ResCard);

    const { loggedInUser, setUserName } = useContext(userContext);

    useEffect(() => {
        setUserName("Rajinikanth");
    });


    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>🔴 You are offline! Please check your internet connection.</h1>);
    }
    return ( resLiistInfo.length === 0? <Shimmer /> :
      
        <div className="body">
            <div className="filter flex justify-center m-4">
                <button 
                className="px-4 py-1 bg-orange-400 m-3 rounded-lg hover:bg-orange-600 text-white font-bold"
                onClick={() => {
                        const filteredList = resLiistInfo.filter((res) => res.info.avgRating > 4);
                        setSearchResListInfo(filteredList);
                    }
                    
                }
                >Top Rate Restaurant</button>
                <div><h1>loggedInUser : {loggedInUser}</h1></div>
                <div className="Search m-4 p-4 flex items-center">
                    <input 
                        type="text" 
                        data-testid="searchInput"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}} 
                        onBlur={() => {
                             const filteredSearchRes = resLiistInfo.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                             ;

                             filteredSearchRes.length === 0 ? setSearchResListInfo([]) : setSearchResListInfo(filteredSearchRes);

                        }}
                        className="border border-solid border-black p-2 rounded-lg" 
                        placeholder="Search Restaurant" 
                    />
                   
                </div>
            </div>
            {/* <div className="flex flex-wrap items-center ml-32 mr-32">
                {
                searchResListInfo.length === 0 ? <h2>No restaurant found</h2> : searchResListInfo.map((res) =>(
               <Link key ={res.info.id} to={`/restarant/${res.info.id}`}>
                {res.info.veg ? <PromotedResCard resData={res} /> : <ResCard  resData={res} />}
                </Link>
                ))}
            </div> */}
             <div className="flex flex-wrap items-center ml-32 mr-32">
                {
                searchResListInfo.length === 0 ? <h2>No restaurant found</h2> : searchResListInfo.map((res) =>(
               <h1 key ={res.info.id} >
                {res.info.veg ? <PromotedResCard resData={res?.info} /> : <ResCard  resData={res?.info} />}
                </h1>
                ))}
            </div>
        </div>
    );
}

export default Body;