import { CDN_URL } from "../utlis/constant";
const Cards = (props) => {
    const { resData } = props;
    // console.log(props)

    //optional chaining
    // const {name} = resData?.card
    return (
        <div className="cards" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo"
                alt="res-logo"
                src={ CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4 className = "m-0">{(resData.info.cuisines).join(", ")}</h4>
            <h4 className = "m-0">{resData.info.costForTwo} </h4>
            <h4 className = "m-0">{resData.info.avgRating} stars</h4>
            <h4 className = "m-0">{resData.info.sla.deliveryTime} mins</h4>

        </div>
    );
};
 //above here - src={ CDN_URL + resData.card.info.cloudinaryImageId}></img>
 // CDN_URL is not under'{}' the segment already a JS object bcz it's inside '{}'

export default Cards;