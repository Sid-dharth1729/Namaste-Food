import { CDN_URL } from "../utlis/constant";
const Cards = (props) => {
    const { resData } = props;
    console.log(props)
    //optional chaining
    // const {name} = resData?.card
    return (
        <div className="cards" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo"
                alt="res-logo"
                src={ CDN_URL + resData.card.info.cloudinaryImageId}></img>
            <h3>{resData.card.info.name}</h3>
            <h4>{(resData.card.info.cuisines).join(", ")}</h4>
            <h4>₹{resData.card.info.costForTwo / 100} FOR TWO</h4>
            <h4>{resData.card.info.avgRating} stars</h4>
            <h4>{resData.card.info.sla.deliveryTime} mins</h4>

        </div>
    );
};
 //above here - src={ CDN_URL + resData.card.info.cloudinaryImageId}></img>
 // CDN_URL is not under'{}' the segment already a JS object bcz it's inside '{}'

export default Cards;