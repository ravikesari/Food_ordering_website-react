import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utiles/utiles";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const menuData = await fetch(RES_MENU_API + resId);

        const json = await menuData.json();

        setResInfo(json.data);
    };

    return(resInfo)
}

export default useRestaurantMenu;