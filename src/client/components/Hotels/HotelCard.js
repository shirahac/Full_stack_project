import React from "react";
import "./Hotel.scss"
import ReactStars from "react-stars";
import {Link} from "react-router-dom";


const HotelCard = (props) => {

    return (
        <div className="card">
            <img className="card_photo" src={props.hotel.picture}/>
                <div className="card_info">
                    <div className="card_name"> {props.hotel.name} </div>
                    <div className="card_location"> {props.hotel.location} </div>
                    <div className="card_link"> <a href={props.hotel.link} target="_blank">go to the hotel web for booking</a> </div>
                    <ReactStars
                        value={props.hotel.avgScore}
                        count={5}
                        size={20}
                        half={false}
                        color={'#f4ee42'} />
                    <Link className='reviews_link' to={"/viewReviews/" + props.hotel.id}>view reviews on {props.hotel.name}</Link>
                </div>
        </div>
    )
};

export default HotelCard;


