import React from "react"
import "./collections.css"
import Slider from "react-slick"
import NextArrow from "../carasoual/nextArrow";
import PrevArrow from "../carasoual/prevArrow";

const setting = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

const Collections = ({list})=>{
    return (
        <div className="collection-wrapper">
            <div className="max-width collection">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className="collection-subtitle-text">Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</div>
                    <div className="collection-location">
                        <div>All Collection in Lucknow</div>
                        <i className="fi fi-rr-caret-right absolute-center"/>
                    </div>
                </div>
                <Slider {...setting}>
                    {
                        list.map((item)=>(
                            <div>
                                <div className="collection-cover">
                                    <img src={item.cover} className="collection-image" alt={item.title}/>
                                    <div className="gradient-bg"/>
                                    <div className="collection-card-title">{item.title}</div>
                                    <div className="collection-card-subtitle">
                                        <div>{item.places}</div>
                                        <i className="fi fi-rr-caret-right absolute-center"/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Collections;