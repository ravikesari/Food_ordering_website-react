import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utiles/utiles";
import { addItem } from "../store/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div>
                    <div className="flex justify-between mb-7 pb-2" key={item.card.info.id}>
                        <div className="w-8/12">
                            <span className=" font-semibold text-lg">{item.card.info.name}</span>
                            <span className="block font-semibold text-base">
                                Rs.{Math.round(item.card.info.price / 100) || 220}
                            </span>
                            <p className="text-sm mt-3">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 h-32" >
                            <img className="object-cover w-full h-full rounded-lg" src={ITEM_IMG_URL + item.card.info.imageId} />

                            <div className="flex justify-center">
                                <button
                                    className=" bg-white shadow-xl px-10 py-2 rounded-lg -translate-y-5 text-orange-500 font-bold"
                                    onClick={() => handleAddItem(item)}    
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-500 mb-4" />
                </div>
            ))
            }

        </div>
    )
}

export default ItemList;