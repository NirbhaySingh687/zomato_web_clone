import React from "react"
import "./delivery.css"
import Filter from "../common/filters";
import DeliveryCollection from "./DeliveryCollection";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";
import {restaurants} from "../../data/resturants";

const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center" />,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating: 4.0+",
    },
    {
        id: 3,
        title: "Safe and Hygienic",
    },
    {
        id: 4,
        title: "Pure Veg",
    },
    {
        id: 5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center" />,
    },
    {
        id: 6,
        title: "Great Offers",
    },
];
const restaurantList = restaurants

const Delivery = ()=>{
    return(
        <div>
            <div className="max-width">
                <Filter filterList={deliveryFilters}/>
            </div>
            <DeliveryCollection />
            <TopBrands />
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurant in Bangalore"/>
        </div>
    )
}

export default Delivery