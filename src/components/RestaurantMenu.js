import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_IMG_URL } from "../utiles/utiles";
import useRestaurantMenu from "../utiles/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, costForTwoMessage, avgRating, cuisines, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards, title, type } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)

    return (
        <div className="w-6/12 mt-10 mx-auto">
            <h2 className="font-bold text-2xl font-serif">{name}</h2>
            <h3>{avgRating} ({totalRatingsString}) - {costForTwoMessage}</h3>
            <h3>{cuisines.join(",")}</h3>

            {categories.map((category) => 
               <RestaurantCategory data = {category?.card?.card}/>
            )}
        </div>
    );
}

export default RestaurantMenu;