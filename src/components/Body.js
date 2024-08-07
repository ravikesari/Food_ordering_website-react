import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div>
                Your are offline!
            </div>
        );
    }
    

    return resList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="flex px-24 py-6 justify-between">

                <div className="">
                    <input placeholder="Search" type="Text" className="ring-gray-200 ring-1 ring-inset rounded-md mr-2 py-1 placeholder:pl-2" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button className="bg-orange-300 px-4 py-1 rounded-lg"
                        onClick={() => {
                            const filterList = resList.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilterResList(filterList)

                        }}>Search</button>
                </div>

                <div>
                    <button className="bg-orange-300 px-4 py-1 rounded-lg mr-2"
                        onClick={() => {
                            setFilterResList(resList.filter((res) => res.info.avgRating > 4.2))
                        }}>
                        Top Rated restaurants
                    </button>

                    <button className="bg-orange-300 px-4 py-1 rounded-lg"
                        onClick={() => {
                            setFilterResList(resList.filter((res) => res.info.veg == 1))
                        }}>
                        veg restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap px-24  justify-between">
                {
                    filterResList.map((restaurant) => (
                        <Link className="reslink" to={"/restaurant/" + restaurant?.info?.id}
                            key={restaurant?.info?.id} >
                            <ResCard {...restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;