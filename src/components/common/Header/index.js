import React from "react"
import "./Header.css"

const Header = ()=>{
    return(
        <div className="max-width header">
            <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Zomato-logo"
                className="header-logo"
            />
            <div className="header-left">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-rr-marker absolute-center location-icon" />
                            <div>Bangalore</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center" />
                    </div>
                    <div className="location-search-separator" />
                    <div className="header-searchBar">
                        <i className="fi fi-rr-search absolute-center search-icon" />
                        <input placeholder="Search for Restaurant, cuisine or Dishes" className="search-input"/>
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img
                        src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                        className="header-profile-image"
                        alt="Profile"
                    />
                    <span className="header-userName">Nirbhay</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon" />
                </div>
            </div>
        </div>
    )
}

export default Header