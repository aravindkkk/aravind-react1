const {useEffect, useState} = require('react');
const { RES_LIST } = require('./constants');


const useRestaurantInfo = () => {
    const [resLiistInfo, setResListInfo]           = useState([]);
    const [searchResListInfo, setSearchResListInfo] = useState([]);
    const [searchText, setSearchText]               = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setResListInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchResListInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [resLiistInfo, searchResListInfo, setSearchResListInfo,searchText, setSearchText];

}

export default useRestaurantInfo;