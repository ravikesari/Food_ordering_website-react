import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utiles/utiles";
import { ITEM_IMG_URL } from "../utiles/utiles";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const menuData = await fetch(RES_MENU_API + resId);

        const json = await menuData.json();

        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, costForTwoMessage, avgRating, cuisines, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div className="res-items-menu">
            <h2>{name}</h2>
            <h3>{avgRating} ({totalRatingsString}) - {costForTwoMessage}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3 className="menu_title">Menu</h3>
            <h2>Recommended</h2>
            <div>
                {
                    itemCards.map((item =>
                        <div className="menu" key={item.card.info.id}>
                            <hr />
                            <div>
                                
                                <div>
                                    <h3>{item.card.info.name}</h3>
                                    <h4>Rs.{Math.round(item?.card?.info?.price / 100) || 320}</h4>
                                    <p>{item.card.info.description}</p>
                                </div>
                                <img alt={item.card.info.name} className="item_img" src={ITEM_IMG_URL + item.card.info.imageId} />
                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;