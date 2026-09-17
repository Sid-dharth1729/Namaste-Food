//[ below code will works as  <Cards resData={resList[0]}/> but for all elemnt
//   <Cards key={restaurant.card.info.id} resData={restaurant}/>  ]
import { useState } from "react";
import Cards from "./Cards";    //importing a "default export"
import {resList} from "../utlis/mocData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer" ;

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]); //useState

    //use Effect
    useEffect(() => {
        console.log("useEffect function is called");
        fetchData();
    }, []);
    //fetching form Swiggy API
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3108256&lng=78.03444259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        // console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //When Ui rendering
    //Conditional Rendering
    if(listOfRes.length === 0){
        return <Shimmer />;
    }
    return (
        <div className="res-container" >
            <div className="filter">
                <button className="filter-btn" onClick={()=> {  //it filters res which has rating < 4
                    const filterRes = listOfRes.filter(
                        (resList) => resList.info.avgRating > 4
                    )
                    setListOfRes(filterRes);
                }}
                >
                    Top Rated retautrants
                </button>
                
            </div>
            <div className="res-cards">
                {listOfRes.map((restaurant) =>(
                    <Cards key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;