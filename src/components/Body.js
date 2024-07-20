import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import restaurants from "./RestaurantCardsData";

const Body = () => {
    const [resList, setResList] = useState(restaurants)
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        console.log(json);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    };


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        setResList(resList.filter((res) => res.info.avgRating > 4.2))
                    }}>
                    Top Rated restaurants
                </button>

                <button className="filter-btn"
                    onClick={() => {
                        setResList(resList.filter((res) => res.info.veg == 1))
                    }}>
                    veg restaurants
                </button>
            </div>
            <div className="resContainer">
                {
                    resList.map((restaurant) => (
                        <ResCard key={restaurant?.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;