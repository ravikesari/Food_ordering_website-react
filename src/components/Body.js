import { useState } from "react";
import ResCard from "./ResCard";
import restaurants from "./RestaurantCardsData";

const Body = () => {

    const [resList,setResList] = useState(restaurants)


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        setResList(resList.filter((res) => res.data.avgRating > 4))
                    }}>
                    Top Rated restaurants
                </button>

                <button className="filter-btn"
                    onClick={() => {
                        setResList(resList.filter((res) => res.data.veg == 1))
                    }}>
                    veg restaurants
                </button>
            </div>
            <div className="resContainer">
                {
                    resList.map((restaurant) => (
                        <ResCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;