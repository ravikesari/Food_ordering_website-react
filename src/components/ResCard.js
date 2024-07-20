const ResCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,areaName,costForTwoString,cuisines,avgRating} = resData?.data;
    return (
        <div className="resCard">
            <div className="resLogo">
                <img
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{costForTwoString}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export default ResCard;