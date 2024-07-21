import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { dataPath } from "../utiles/utiles";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filterResList,setFilterResList] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json)
    };



    return resList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input placeholder="Search" type="Text" className="searchBox" value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button className="searchBtn" 
                    onClick={() => {
                        const filterList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilterResList(filterList)

                    }}>Search</button>
                </div>

                <div>
                    <button className="filter-btn"
                        onClick={() => {
                            setFilterResList(resList.filter((res) => res.info.avgRating > 4.2))
                        }}>
                        Top Rated restaurants
                    </button>

                    <button className="filter-btn"
                        onClick={() => {
                            setFilterResList(resList.filter((res) => res.info.veg == 1))
                        }}>
                        veg restaurants
                    </button>
                </div>
            </div>
            <div className="resContainer">
                {
                    filterResList.map((restaurant) => (
                        <ResCard key={restaurant?.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;