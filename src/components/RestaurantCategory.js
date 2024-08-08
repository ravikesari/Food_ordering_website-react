import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="shadow-md px-6 my-4 border-y rounded-lg" >
            <div className="flex justify-between my-4 pr-4 cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.itemCards ? `${data.title} (${data.itemCards.length})` : `${data.title}`}</span>
                <span>{showItems ? "△" : "▽" }</span>
            </div>

            {showItems && <ItemList items = {data.itemCards}/>}
        </div>
    );
}

export default RestaurantCategory;