import ResCard from "./ResCard";
import restaurants from "./RestaurantCardsData";

const Body = () => {
    return (
        <div className="resContainer">
            {
                restaurants.map((restaurant) => (
                    <ResCard key = {restaurant.info.id} resData = {restaurant}/>
                ))
            }
        </div>
    )
}

export default Body;