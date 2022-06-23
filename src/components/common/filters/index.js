import React from "react"
import "./filter.css"
import FilterItems from "./filterItems"

const Filter = ({filterList})=>{
    return(
        <div className="filters">
            {
                filterList && filterList.map((filter)=>(
                    <FilterItems filter={filter} key={filter.id}/>
                ))
            }
        </div>
    )
}

export default Filter