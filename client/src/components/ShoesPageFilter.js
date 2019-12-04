import React from "react"
import {brandFilter} from "./ShoesPageFilterImages"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Filter.css"
import { Link } from "react-router-dom"

export default function() {

    return (
        <div className="brandfiltercontainer">
            <div className="brandfilter">
                {brandFilter.map((brand, i) => (
                    <div key={"brand" + i}> 
                        <Link to={brand.url}>
                            <img className="brandImg" src={`${brand.img}`} alt="whoops" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}