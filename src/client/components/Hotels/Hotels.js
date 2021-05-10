import React from 'react'
import { useSelector } from 'react-redux'
import "./Hotel.scss"
import HotelCard from "./HotelCard";
import {Link} from "react-router-dom";


const Hotels = (props) => {

    const viewHotelReviews = (hotelId) => {
        props.history.push("/viewReviews/" + hotelId);
    };

    const { hotels } = useSelector(state => state.app);

    return (
        <div>
            <div className="grid_container">
                {hotels !== undefined ? hotels.map((hotel, id) => <HotelCard key={id} hotel={hotel} viewHotelReviews={()=>viewHotelReviews(hotel.id)}/>) : <h1></h1>}
            </div>
            <div className="add-res">
                <p className="add_hotel">Hotel not found?
                    <Link to="/add_hotel"> Add new hotel</Link> </p>
            </div>
        </div>
    );
};

export default Hotels;