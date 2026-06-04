//[ below code will works as  <Cards resData={resList[0]}/> but for all elemnt
//   <Cards key={restaurant.card.info.id} resData={restaurant}/>  ]
import { useState } from "react";
import Cards from "./Cards";    //importing a "default export"
import {resList} from "../utlis/mocData";
import { useState } from "react";

const Body = () => {

    const [listOfRes, setlistOfRes] = useState(resList) //useState

    return (
        <div className="res-container" >
            <div className="filter">
                <button className="filter-btn" onClick={()=> {  //it filters res which has rating < 4
                    const filterRes = listOfRes.filter(
                        (resList) => resList.card.info.avgRating > 4
                    )
                    setlistOfRes(filterRes);
                }}
                >
                    Top Rated retautrants
                </button>
                
            </div>
            <div className="res-cards">
                {listOfRes.map((restaurant) =>(
                    <Cards key={restaurant.card.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;