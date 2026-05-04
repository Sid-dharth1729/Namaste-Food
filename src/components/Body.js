//[ below code will works as  <Cards resData={resList[0]}/> but for all elemnt
//   <Cards key={restaurant.card.info.id} resData={restaurant}/>  ]
import Cards from "./Cards";    //importing a "default export"
import {resList} from "../utlis/mocData";
const Body = () => {
    return (
        <div className="res-container" >
            <div className="search-box">
                Search
            </div>
            <div className="res-cards">
                {resList.map((restaurant) =>
                (
                    <Cards key={restaurant.card.info.id} resData={restaurant} />
                ))};
            </div>
        </div>
    );
};

export default Body;