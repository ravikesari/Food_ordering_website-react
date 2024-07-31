import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data)
    return (
        <div className="shadow-md p-4 my-4 border-y">
            <div className="flex justify-between my-4 ">
                <span className="font-bold text-lg">{data.itemCards ? `${data.title} (${data.itemCards.length})` : `${data.title}`}</span>
                <span>⬇️</span>
            </div>

            {data.itemCards ? <ItemList items = {data.itemCards}/>: "no item cards"}
        </div>
    );
}

export default RestaurantCategory;