const ResCard = (props) => {
    // const { resData } = props;
    const { cloudinaryImageId, name, areaName, costForTwoString, cuisines, avgRating } = props?.info;
    return (
        <div className="w-60 mb-5 hover:scale-95 duration-200">
            <div className="h-[200px] w-full">
                <img className="h-full w-full object-cover rounded-lg "
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <div className="p-3">
                <h3 className="font-bold my-2 truncate">{name}</h3>
                <h4 className="truncate">{areaName}</h4>
                <h4 className="truncate">{costForTwoString}</h4>
                <p className="truncate">{cuisines.join(", ")}</p>
                <p className="">{avgRating}</p>
            </div>
        </div>
    )
}

export default ResCard;